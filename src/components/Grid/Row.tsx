import { Component } from "solid-js";

const Row: Component<any> = (props: any) => {
  const grid = `${props.grid ? 'grid': 'flex'}`;
  const align = `${props.align ? `justify-${props.align}` : ''}`
  const direction = `${props.direction ? `justify-${props.direction}` : ''}`
  return (
    <div
      className={`${grid} ${align}`}
    >
      {props.children}
    </div>
  );
};

export default Row;
