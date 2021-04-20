import { createSignal } from 'solid-js';
import Table from "./Table";
import Dropdown, { DropdownMenu } from '../Dropdown';
import Button from '../Button';

const App: any = () => {
  const generateData = () => {
    const items = [];
    for(let i = 0; i <= 50; i++) {
      items.push({
        name: `Group ${Math.floor(Math.random() * 10)}`,
        date: `Apr ${Math.floor(Math.random() * 31)}, 2021`,
        members: Math.floor(Math.random() * 30000).toLocaleString(),
        posts: `${Math.floor(Math.random() * 1000)}K`,
        ctr: `${(Math.random() * 10).toFixed(2)}%`,
        feed: `${Math.floor(Math.random() * 1000)}K`
      })
    }
    return items;
  },
  [data, setData] = createSignal(generateData()),
  [loading, setLoading] = createSignal(false),
  [fixedHeaders, setFixedheaders] = createSignal(true),
  [fixedColum, setFixedColum] = createSignal(['left', 'right']),
  [paginations, setPaginations] = createSignal(true),
  headers = [
    {
      header: "checkbox",
      render: (props: any) => (
        <input
          type="checkbox"
          checked={props.anySelected()}
          onInput={props.toggleAll}
        />
      ),
      cellRenderer: (props: any) => (
        <input
          type="checkbox"
          checked={props.isSelected}
          onInput={() => props.toggleRow(!props.isSelected)}
        />
      ),
    },
    {
      header: "Group",
      accessor: "name",
      sort: true,
      fixed: fixedColum()?.[0],
    },
    {
      header: "Date",
      accessor: "date",
    },
    {
      header: "Members",
      accessor: "members"
    },
    {
      header: "Posts",
      accessor: "posts"
    },
    {
      header: "CTR",
      accessor: "ctr",
      sort: true,
    },
    {
      header: "Feed",
      accessor: "feed",
      sort: true,
      fixed: fixedColum()?.[1],
    },
    {
      header: "",
      accessor: "action",
      cellRenderer: () => {
        return (
          <Dropdown
            renderBtn={
              (open: any, setOpen: any) => (
                <div onClick={() => setOpen(!open)}>
                  <div className="ellipsis"></div>
                  <div className="ellipsis"></div>
                  <div className="ellipsis"></div>
                </div>
              )
            }
            position='right'
          >
            <DropdownMenu>Edit</DropdownMenu>
            <DropdownMenu>Delete</DropdownMenu>
          </Dropdown>
        );
      }
    }
  ];

  const pagination: any = {
    pageNo: 1,
    pageSize: 10,
    total: generateData().length,
    totalPages: Math.ceil(generateData().length / 10),
  }

  return (
    <div>
      <div style={{ margin: '20px' }}>
        <Button onClick={() => setLoading(!loading())}>Toggle Loading</Button>
        <Button onClick={() => setFixedheaders(!fixedHeaders())}>Toggle Fixed Headers</Button>
        <Button onClick={() => setPaginations(!paginations())}>Toggle Paginations</Button>
        <Button onClick={() => setData(data().length ? [] : generateData())}>Toggle Empty State</Button>
      </div>
      <Table
        headers={headers}
        data={data()}
        className="table"
        wrapperClass="wrapper--class"
        pagination={pagination}
        fixedHeaders={fixedHeaders()}
        loading={loading()}
        hidePagination={paginations()}
      />
    </div>
  );
};

export default App;
