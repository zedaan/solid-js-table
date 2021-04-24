import { styled } from 'solid-styled-components';

const ButtonWrapper = styled('button')`
  display: flex;
  color: ${(props) => props.theme.colors.primaryText};
  background: #121111;
  cursor: pointer;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  align-items: center;
  line-height: 0;
  border: 1px solid #121111;
  border-radius: 0.75em;
  backface-visibility: hidden;
  transition: 0.1s ease-in;

  .icon--left {
    margin-right: 11px;
  }

  &:active,
  &:visited,
  &:focus,  
  &:hover {
    outline: none;
  }

  &:hover {
    background: #1C1B1B;
    border-color: #1C1B1B;
  }

  &:active {
    transform: scale(0.95);
  }

  &.btn--lg {
    font-size: 1em;
    height: 56px;
    padding: 0 48px;
  }
  
  &.btn--md {
    font-size: 1em;
    height: 48px;
    padding: 0 30px;
  }
  
  &.btn--sm {
    font-size: 0.875em;
    font-weight: 500;
    height: 40px;
    padding: 0 32px;
  }
  
  &.btn--xs {
    font-size: 0.75em;
    font-weight: normal;
    height: 32px;
    padding: 0 24px;
  }  

  &.btn--primary {
    background-color: #0095F8;
    border-color: #0095F8;

    &:hover {
      background-color: #0089E4;
      border-color: #0089E4;
    }
  }

  &.btn--danger {
    background-color: #FF464F;
    border-color: #FF464F;

    &:hover {
      background-color: #FF323C;
      border-color: #FF323C;
    }
  }

  &.btn--ghost {
    background-color: transparent;
    border-color: #444141;

    &:hover {
      background-color: transparent;
      border-color:  #635D5D;
    }
  }

  &.btn--ghost-primary {
    color: #0095F8;
    background-color: transparent;
    border-color: #0095F8;
    
    &:hover {
      color: #0089E4;
      background-color: transparent;
      border-color:  #0089E4;
    }
  }
  
  &.btn--ghost-danger {
    color: #FF464F;
    background-color: transparent;
    border-color: #FF464F;
    
    &:hover {
      color: #FF323C;
      background-color: transparent;
      border-color:  #FF323C;
    }
  }
  
  &.btn--disabled {
    color: rgba(243, 243, 243, 0.32);
    background-color: rgba(18, 17, 17, 0.32);
    border-color: rgba(18, 17, 17, 0.0);
    cursor: not-allowed;

    &:active,
    &:visited,
    &:focus {
      transform: none;
    }
  }
`;


export default ButtonWrapper;
