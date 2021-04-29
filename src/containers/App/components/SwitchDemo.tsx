import { Component, createSignal } from 'solid-js';
import SwitchDemo from '../../../components/Switch';

const Switch: Component<any> = (props) => {
  const [isActive, setActive] = createSignal(true);
  return (
    <div>
      <SwitchDemo onChange={(e: any) => setActive(!isActive())} checked={isActive()}/>

      <div>
        <h4 style={{ color: '#fff', "margin-top": '40px' }}>Large</h4>
        <SwitchDemo onChange={(e: any) => setActive(!isActive())} checked={isActive()} size="lg"/>
      </div>
      <div>
        <h4 style={{ color: '#fff', "margin-top": '40px' }}>Medium</h4>
        <SwitchDemo onChange={(e: any) => setActive(!isActive())} checked={isActive()} size="md"/>
      </div>
      <div>
        <h4 style={{ color: '#fff', "margin-top": '40px' }}>Small</h4>
        <SwitchDemo onChange={(e: any) => setActive(!isActive())} checked={isActive()} size="sm"/>
      </div>
      <div>
        <h4 style={{ color: '#fff', "margin-top": '40px' }}>Extra small</h4>
        <SwitchDemo onChange={(e: any) => setActive(!isActive())} checked={isActive()} size="xs"/>
      </div>
      <div>
        <h4 style={{ color: '#fff', "margin-top": '40px' }}>Extra small</h4>
        <SwitchDemo onChange={(e: any) => setActive(!isActive())} checked={isActive()} size="xs"/>
      </div>
      <div>
        <h4 style={{ color: '#fff', "margin-top": '40px' }}>Switch with Labels</h4>
        <SwitchDemo
          onChange={(e: any) => setActive(!isActive())}
          checked={isActive()}
          size="lg"
          checkedLabel="Yes"
          unCheckedLabel="No"
          style={{ 'margin-right': '25px' }}
          />
        <SwitchDemo
          onChange={(e: any) => setActive(!isActive())}
          checked={isActive()}
          size="md"
          checkedLabel="Yes"
          unCheckedLabel="No"
          style={{ 'margin-right': '25px' }}
          />
        <SwitchDemo
          onChange={(e: any) => setActive(!isActive())}
          checked={isActive()}
          size="sm"
          checkedLabel="Yes"
          unCheckedLabel="No"
          style={{ 'margin-right': '25px' }}
        />

        <SwitchDemo
          onChange={(e: any) => setActive(!isActive())}
          checked={isActive()}
          size="xs"
          checkedLabel="Yes"
          unCheckedLabel="No"
        />
      </div>
    </div>
  )
}


export default Switch;
