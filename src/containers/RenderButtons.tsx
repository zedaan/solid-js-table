import { Component, For } from 'solid-js';
import Button from '../components/ButtonNew';

const RenderButton: Component<any> = (props) => {
  const buttonSizes = ['lg', 'md', 'sm', 'xs'];
  return (
    <div>
      <div>
        <div className="btn-group">
          <For each={buttonSizes}>
            {(size) => (
              <div
                style={{
                  flex: 1,
                  "padding-bottom": '20px'
                }}
              >
                <Button
                  variant={props.variant}
                  size={size}
                  icon={props.icon}
                  iconBefore={props.iconBefore}
                  iconAfter={props.iconAfter}
                >
                  {props.title}
                </Button>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  )
}

export default RenderButton;
