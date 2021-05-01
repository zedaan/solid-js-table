import { styled } from "solid-styled-components";

const Button = styled("button")`
  color: #e9e9e9;
  background: #1211117a;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  padding: 10px 25px;
  line-height: 16px;
  border: 1px solid #2f2b2b;
  border-radius: 5px;
  margin-right: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: 0.2s all;

  &:active,
  &:focus,
  &:visited,
  &:hover {
    border: 1px solid #121111;
    background: #121111;
    box-shadow: 0px 2px 3px 3px rgba(0, 0, 0, 0.1);
    outline: none;
  }
`;

export default Button;
