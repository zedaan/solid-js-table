import { Component, Show } from 'solid-js';
import ButtonWrapper from './styles';

const Button: Component<any> = (props) => {
  const { children, variant, className, size, icon, ...rest } = props;

  return (
    <ButtonWrapper
      className={`btn--${variant || 'default'} ${className || ''} btn--${size || 'lg'}`}
      {...rest}
    >
      <Show when={icon}>
        <span className="icon--left">{icon}</span>
      </Show>
      {props.children}
    </ButtonWrapper>
  )
}

export default Button;
