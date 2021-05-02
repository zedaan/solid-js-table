import { styled } from 'solid-styled-components';

const TrashIcon = styled('i')`
  &.gg-trash-empty {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 10px;
    height: 12px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    margin-top: 4px
  }
  &.gg-trash-empty::after,
  &.gg-trash-empty::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute
  }
  &.gg-trash-empty::after {
    background: #fff;
    border-radius: 3px;
    width: 16px;
    height: 2px;
    top: -4px;
    left: -5px
  }
  &.gg-trash-empty::before {
    width: 10px;
    height: 4px;
    border: 2px solid #fff;
    border-bottom: transparent;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    top: -7px;
    left: -2px
  }
`;

export default TrashIcon;