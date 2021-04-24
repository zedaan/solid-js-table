import { Component, Show } from 'solid-js';
import ButtonWrapper from './styles';

const Button: Component<any> = (props) => {
  const { children, variant, className, size, iconBefore, iconAfter, ...rest } = props;

  return (
    <ButtonWrapper
      className={`btn--${variant || 'default'} ${className || ''} btn--${size || 'small'}`}
      {...rest}
    >
      <Show when={iconBefore}>
        <span className="icon icon--left">{iconBefore}</span>
      </Show>
      {props.children}
      <Show when={iconAfter}>
        <span className="icon icon--right">{iconAfter}</span>
      </Show>
    </ButtonWrapper>
  )
}

export default Button;
