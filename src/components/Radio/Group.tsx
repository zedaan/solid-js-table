import { Component, createComputed, createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';

const Wrapper: any = styled('div')`
  &.inline {
    display: flex;

    .radio {
      padding-right: 20px;
    }
  }
`;

const RadioGroup: Component<any> = (props) => {
  const [items, setItems] = createSignal(props.children);

  createComputed(() => {
    setItems(props.children.map((item: any) => {
      item.firstChild.tagName === 'INPUT'
        ? item.firstChild.checked = item.firstChild.value === props.selected
        : item.lastChild.checked = item.lastChild.value === props.selected;
      return item;
    }));
  })

  const onChange = (e: any) => {
    props.onChange && props.onChange(e.target.value, e);
  };

  return (
    <Wrapper
      onChange={onChange}
      className={`${props.inline ? 'inline': ''}`}
    >
      {items}
    </Wrapper>
  )
}

export default RadioGroup;
