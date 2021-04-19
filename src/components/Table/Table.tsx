import { Component, createSignal, createSelector, createComputed, For, createEffect, onMount, createState, createRenderEffect, createMemo } from "solid-js";
import Scrollbar from '../Scrollbar';
import { HeaderCell, Row, Pagination } from './components';
import { defaultSorter, onSortHandler } from './components/helpers';
import { ITableProps } from './model';
import Wrapper from "./styles";

const Table: Component<ITableProps> = (props: ITableProps) => {
  const [selected, setSelected] = createSignal(new Set(), false),
    toggleRow = (index: number) => (set: any) => {
      const list = new Set(selected());
      list[set ? "add" : "delete"](index);
      setSelected(list);
    },
    isSelected = createSelector(selected, (k, list) => list.has(k)),
    anySelected = () => selected().size,
    toggleAll = () => {
      const list = new Set(selected());
      if (list.size) list.clear();
      else props.data.forEach((_: any, i: number) => list.add(i));
      setSelected(list);
    },
    [getSortDirectionSignal, setSortDirection] = createSignal(props.defaultSortDirection || [null, null]),
    [getRows, setRows] = createSignal(props.data),
    getSortDirection = (): any => {
      const sortDirection = getSortDirectionSignal()
      if (sortDirection !== undefined) {
        return sortDirection
      }
      else if (props?.defaultSortDirection !== undefined) {
        return props?.defaultSortDirection
      } else {
        return [null, null]
      }
    },
    rowSorter = defaultSorter,
    sortRows = () => {
      const currentSortDirection = getSortDirection()
      if (
        currentSortDirection[0] === null &&
        props?.defaultSortDirection !== undefined
      ) {
        setRows(rowSorter({
          rows: getRows(), sortDirection: props?.defaultSortDirection
        }))
      }
      else if (currentSortDirection[0] !== null) {
        setRows(rowSorter({
          rows: getRows(), sortDirection: currentSortDirection
        }))
      };
    },
    sortItems = (e: any, columnID: any) => {
      setSortDirection(onSortHandler({ sortDirection: getSortDirection(), columnID, e }))
      sortRows();
    },
    [pagination, setPagination] = createState(props?.pagination || {
      pageNo: 1,
      pageSize: 10,
      total: 0,
      totalPages: 0,
    });

  createComputed(() => {
    const pageNo = pagination?.pageNo || 1;
    const pageSize = pagination?.pageSize || 10;
    setRows(props.data.slice(((pageNo * pageSize) - pageSize), pageSize * pageNo));
  })

  if(props?.defaultSortDirection?.[0]) {
    sortItems({}, props.defaultSortDirection[0]);
  }

  return (
    <Wrapper className={props.wrapperClass}>
      <Scrollbar fixed={props.fixedHeaders}>
        <table className={props.className}>
          <thead>
            <tr className={props.fixedHeaders ? 'fixed--header__row': ''}>
              <For each={props.headers}>
                {(column: any) => (
                  <HeaderCell
                    column={column}
                    anySelected={anySelected}
                    toggleAll={toggleAll}
                    onClick={(e: any) => {
                      if (column.sort) {
                        column?.sort?.onSort
                          ? column?.sort?.onSort(column, props, e)
                          : sortItems(e, column.accessor);
                      }
                    }}
                    sortDirection={getSortDirectionSignal()}
                    columnID={column.accessor}
                  />
                )}
              </For>
            </tr>
          </thead>
          <tbody>
            <For each={getRows()}>
              {(row, index) => (
                <Row
                  row={row}
                  headers={props.headers}
                  isSelected={isSelected(index())}
                  toggleRow={toggleRow(index())}
                />
              )}
            </For>
          </tbody>
        </table>
      </Scrollbar>
      <Pagination
        pagination={pagination}
        onPageChange={(val: any) => {
          setPagination({ pageNo: val })
        }}
        changeLimit={(limit: number) => {
          setPagination({ pageSize: limit });
          setPagination({
            totalPages: Math.ceil(props?.data.length / limit || 1),
            pageNo: 1,
          })
        }}
      />
    </Wrapper>
  );
};

export default Table;
