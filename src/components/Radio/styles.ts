import { styled } from 'solid-styled-components';

const RadioWrapper = styled('div')`
  display: flex;
  cursor: pointer;
  margin-bottom: 8px;
  align-items: center;
  
  .label {
    cursor: pointer;
    font-size: 16px;
    color: ${(props) => props.theme.colors.inActive};
    flex: 1;
    
    &:hover {
      color: ${(props) => props.theme.colors.primaryText};
    }
  }
  
  .label--left {
    padding-right: 10px;
  }

  .label--right {
    padding-left: 10px;
  }

  input {
    cursor: pointer;
    margin-top: 0;
  }

  &.radio--disabled {
    cursor: not-allowed;

    input,
    .label {
      cursor: not-allowed;
      color: rgba(243, 243, 243, 0.32);
      opacity: 0.5;
    }
  }
`;

export default RadioWrapper;
