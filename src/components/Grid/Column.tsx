import { Component } from 'solid-js';

const Column: Component<any> = (props) => {
  return (
    <div className={`${props.size ? `flex-${props.size}` : ''}`}>
      {props.children}
    </div>
  )
}

export default Column;
