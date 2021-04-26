import { Show, Component } from 'solid-js';
import InputWrapper from './styles';

interface IInputProps {
  label?: any;
  placeholder?: any;
}




const Input: Component<IInputProps> = (props) => {

  return (
    <InputWrapper>
      <Show when={props}>
          <i color="#E9E9E9" class="f007"></i>
      </Show>
      <input type="text" {...props} />
    </InputWrapper>
  )
}

export default Input