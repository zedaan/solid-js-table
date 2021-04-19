## How to run this project
To run this project run the following commands:

To install the dependencies run ``npm install`` or ``yarn``.

Once the dependencies are installed run ``npm start`` or ``yarn start`` to run the project on your local machine.

To build for production run ``npm run build`` 0r ``yarn run build``

## Usage

```js
import Table from "./Table";

const App: any = () => {
  const headers = [
    {
      header: "checkbox",
      render: () => <input type="checkbox" />,
      cellRenderer: () => <input type="checkbox" />,
    },
    {
      header: "Group",
      accessor: "name",
      fixed: 'left',
      sort: true,
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
      header: "Feed",
      accessor: "feed",
      sort: true,
      fixed: 'right',
    },
    {
      header: "action",
      accessor: "action",
      cellRenderer: () => <a href="#">Delete</a>
    }
  ];

  const generateData = () => {
    const items = [];
    for(let i = 0; i <= 50; i++) {
      items.push({
        name: `Group ${Math.floor(Math.random() * 10)}`,
        date: `Apr ${Math.floor(Math.random() * 31)}, 2021`,
        members: Math.floor(Math.random() * 30000).toLocaleString(),
        feed: `${Math.floor(Math.random() * 1000)}K`
      })
    }

    return items;
  }

  const data = generateData();

  const defaultPagination: any = {
    pageNo: 1,
    pageSize: 10,
    total: data.length,
    totalPages: Math.ceil(data.length / 5),
  }

  return (
    <div>
      <Table
        headers={headers}
        data={data}
        className="table"
        wrapperClass="wrapper--class"
        pagination={defaultPagination}
        fixedHeaders
      />
    </div>
  );
};

render(() => <App />)

```
