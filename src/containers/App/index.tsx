import { Component, createSignal, createResource, Switch, Suspense, Match } from 'solid-js';
import { fetchGroups } from '../../api';
import { headers, data } from './data';
import Table from '../../components/Table';
import Wrapper from './styles';

const App: Component = () => {
  return (
    <Wrapper>
      <div className="app__content">
        <h2 style={{ color: '#fff' }}>
          Table Demo
        </h2>
        <Table headers={headers} data={data} />
      </div>
    </Wrapper>
  );
};

export default App;
