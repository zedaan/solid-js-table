import { styled } from "solid-styled-components";

const InputWrapper: any = styled("div")`
  input {
    display: flex;
    color: ${(props) => props.theme.colors.primaryText};
    background-color: #1C1B1B;
    border: 1px solid #1C1B1B;
    box-sizing: border-box;
    border-radius: 12px;
    height: 40px;
    width: 100%;
    outline: none;
    align-items: center;
    padding: 0px 15px;
  }
  icon{
    color: white;
  }
`;

export default InputWrapper;
