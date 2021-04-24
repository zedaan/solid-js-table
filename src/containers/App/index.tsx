import { Component, createSignal, For } from "solid-js";
import { headers, data } from "./data";
import Table from "../../components/Table";
import RenderButton from '../RenderButtons';
import { Tab, Tabs } from '../../components/Tabs';
import Scrollbar from '../../components/Scrollbar';
import Icon from '../../components/Icons';
import Wrapper from "./styles";

const App: Component = () => {
  const [isActive, setIsActive] = createSignal(0);
  const buttons = ['Large', 'Medium', 'Small', 'Extra Small'];

  return (
    <Wrapper>
      <div className="app__content">
      <Tabs activeTab={isActive} onChange={setIsActive}>
        <Tab label="Buttons">
          <Scrollbar style={{ 'max-height': `${window.innerHeight - 150}px` }}>
            <h2 className="heading">Buttons Demo</h2>
            <hr />
            <div className="btn-group">
              <For each={buttons}>
                {(item) => (
                  <div style={{ flex: 1 }}>
                    <h4>{item}</h4>
                  </div>
                )}
              </For>
            </div>
            <RenderButton title="Default" />
            <RenderButton title="Primary" variant="primary" />
            <RenderButton title="Danger" variant="danger" />
            <RenderButton title="Ghost" variant="ghost" />
            <RenderButton title="Primary" variant="ghost-primary" />
            <RenderButton title="Danger" variant="ghost-danger" />
            <RenderButton title="Disabled" variant="disabled" />

            <h4 className="sub--heading" style={{ "font-size": '24px' }}>Button w/left icons</h4>
          
            <RenderButton title="Default" variant="default" iconBefore={<Icon  color="#E9E9E9"/>} />
            <RenderButton title="Primary" variant="primary" iconBefore={<Icon  color="#E9E9E9"/>} />
            <RenderButton title="Ghost" variant="ghost" iconBefore={<Icon color="#E9E9E9" />} />
            <RenderButton title="Primary"variant="ghost-primary" iconBefore={<Icon color="#0095F8" />} />

            <h4 className="sub--heading" style={{ "font-size": '24px' }}>Button w/right icons</h4>
          
            <RenderButton title="Default" variant="default" iconAfter={<Icon  color="#E9E9E9"/>} />
            <RenderButton title="Primary" variant="primary" iconAfter={<Icon  color="#E9E9E9"/>} />
            <RenderButton title="Ghost" variant="ghost" iconAfter={<Icon color="#E9E9E9" />} />
            <RenderButton title="Primary"variant="ghost-primary" iconAfter={<Icon color="#0095F8" />} />

            <h4 className="sub--heading" style={{ "font-size": '24px' }}>Loading button</h4>
            <RenderButton title="Loading" loading />
          </Scrollbar>
        </Tab>
        <Tab label="Table">
          <h2 style={{ color: "#fff" }}>Table Demo</h2>
          <Table headers={headers} data={data} />
        </Tab>
      </Tabs>
      </div>
    </Wrapper>
  );
};

export default App;
