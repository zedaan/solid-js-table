import { Component, Show } from 'solid-js';
import RadioGroup from './Group';
import RadioWrapper from './styles';

const Radio: Component<any> = (props) => {
  const { label, labelPosition = 'right', className, ...rest } = props;
  
  const renderLabel = (
    <label className={`label label--${labelPosition || 'left'}`} for={label}>{label}</label>
  )

  return (
    <RadioWrapper className={`radio ${className || ''} ${rest.disabled ? 'radio--disabled' : ''}`}>
      <Show when={labelPosition !== 'right'}>
        {renderLabel}
      </Show>
      <input {...rest} type="radio" id={label} />
      <Show when={labelPosition === 'right'}>
        {renderLabel}
      </Show>
    </RadioWrapper>
  )
}

export { RadioGroup };
export default Radio;
