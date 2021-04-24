import { styled } from 'solid-styled-components';

const PlusIcon = styled('i')`
&,
&::after {
  display: block;
  box-sizing: border-box;
  background-color: ${({ color }: any) => color};
  border-radius: 10px;
}
& {
  margin-top: -2px;
  position: relative;
  background-color: ${({ color }: any) => color};
  width: 10px;
  height: 2px;
}
&::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 10px;
  top: -4px;
  left: 4px;
}
`;

export default PlusIcon;
