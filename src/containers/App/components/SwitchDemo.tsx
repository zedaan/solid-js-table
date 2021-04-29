import { Component, createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';
import SwitchDemo from '../../../components/Switch';

const Wrapper = styled('div')`
  max-width: 1024px;

  h4 {
    padding-top: 40px;
  }
`;

const Switch: Component<any> = (props) => {
  const [isActive, setActive] = createSignal(true);
  return (
    <Wrapper>
      <h5 style={{ color: '#fff'}}>Default</h5>
      <SwitchDemo onChange={(e: any) => setActive(!isActive())} checked={isActive()} />
      <div style={{ display: 'flex', "justify-content": 'space-between' }}>
        <div>
          <h5 style={{ color: '#fff', "margin-top": '40px' }}>Large</h5>
          <SwitchDemo onChange={(e: any) => setActive(!isActive())} checked={isActive()} size="lg"/>
        </div>
        <div>
          <h5 style={{ color: '#fff', "margin-top": '40px' }}>Medium</h5>
          <SwitchDemo onChange={(e: any) => setActive(!isActive())} checked={isActive()} size="md"/>
        </div>
        <div>
          <h5 style={{ color: '#fff', "margin-top": '40px' }}>Small</h5>
          <SwitchDemo onChange={(e: any) => setActive(!isActive())} checked={isActive()} size="sm"/>
        </div>
        <div>
          <h5 style={{ color: '#fff', "margin-top": '40px' }}>Extra small</h5>
          <SwitchDemo onChange={(e: any) => setActive(!isActive())} checked={isActive()} size="xs"/>
        </div>
      </div>
      <h4 style={{ color: '#fff' }}>Switch with Labels</h4>
      <div style={{ display: 'flex', "justify-content": 'space-between'}}>
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
      <div>
        <h4 style={{ color: '#fff', }}>Disabled</h4>
        <SwitchDemo
          onChange={(e: any) => setActive(!isActive())}
          checked={isActive()}
          size="sm"
          checkedLabel="Yes"
          unCheckedLabel="No"
          disabled
        />
      </div>
    </Wrapper>
  )
}


export default Switch;
