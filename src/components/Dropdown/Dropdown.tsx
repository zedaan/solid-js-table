import { Component, createSignal, Show, For, onMount } from 'solid-js';
import Wrapper from './styles';

interface IDropdownProps {
  label?: string;
  renderBtn?: any;
  children?: any;
  position?: 'left' | 'right';
}

const Dropdown: Component<IDropdownProps> = (props) => {
  const [isVisible, setVisible] = createSignal(false);

  const renderBtn = () => (
    <div onClick={(e) => {
      e.preventDefault();
      setVisible(!isVisible())
    }}>
      {props.label}
    </div>
  )

  return (
    <Wrapper className="dropdown" position={props?.position}>
      <div className="dropdown--btn">
        <Show when={props?.renderBtn} fallback={renderBtn()}>
          {props?.renderBtn(isVisible(), setVisible)}
        </Show>
      </div>
      <Show when={isVisible()}>
        <div className="dropdown__menu">
          {props.children}
        </div>
      </Show>
    </Wrapper>
  );
}

export default Dropdown;
