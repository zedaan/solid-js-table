import { Component, createSignal, onMount, Show } from 'solid-js';
import { Portal } from 'solid-js/web';
import Wrapper, { DropdownMenu } from './styles';

interface IDropdownProps {
  label?: string;
  renderButton?: any;
  children?: any;
  position?: 'left' | 'right';
}

const Dropdown: Component<IDropdownProps> = (props) => {
  let dropdownRef: any;
  let dropdownMenuRef: any;
  const [isVisible, setVisible] = createSignal(false),

  toggleButton = (e: any, value: any) => {
    e.preventDefault();
    e.stopPropagation();
    setVisible(value);
    getPosition();
    if(value) {
      window.addEventListener('resize', getPosition)
    } else {
      window.removeEventListener('resize', getPosition);
    }
  };

  const getPosition = () => {
    const pos: any = dropdownRef.getBoundingClientRect();
    const dropdownWidth = dropdownMenuRef.getBoundingClientRect().width;
    const top = pos.y;
    const left = props?.position === 'right'
      ? (pos.x - dropdownWidth) + pos.width
      : pos.x;

    dropdownMenuRef.style.top = `${top + 30}px`;
    dropdownMenuRef.style.left = `${left}px`;
  }

  const closeOnOutsideClick = (e: any) => {
    if(isVisible()) {
      setVisible(false);
    }
    if(!e.target.matches('.dropdown--btn *')){
      setVisible(false);
    }
  }

  onMount(() => {
    document.addEventListener('click', closeOnOutsideClick, true);
    () => {
      document.removeEventListener('click', closeOnOutsideClick, true);
    }
  })

  return (
    <Wrapper className="dropdown" position={props?.position}>
      <div
        className="dropdown--btn" ref={dropdownRef}
        onClick={(e) => toggleButton(e, !isVisible())}
      >
        {props?.renderButton?.(isVisible()) || props.label}
      </div>
      <Show when={isVisible()}>
        <Portal>
          <DropdownMenu
            className="dropdown__menu"
            ref={dropdownMenuRef}
          >
            {props.children}
          </DropdownMenu>
        </Portal>
      </Show>
    </Wrapper>
  );
}

export default Dropdown;
