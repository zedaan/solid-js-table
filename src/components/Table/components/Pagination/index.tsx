import { Component, For } from 'solid-js';
import Dropdown, { DropdownMenu } from '../../../Dropdown';
import PaginationWrapper from './styles';

const Pagination: Component<any> = (props) => {
  const onNext = () => {
    if (props?.pagination?.pageNo < props?.pagination?.totalPages) {
      props.onPageChange(props.pagination.pageNo + 1);
    }
  },
  onPrev = () => {
    if (props?.pagination?.pageNo > 1) {
      props.onPageChange(props.pagination.pageNo - 1);
    }
  },
  PAGINATION_LIMIT = [5, 10, 15, 20, 50],
  
  renderDropdown = () => (
    <Dropdown
      renderBtn={
        (open: any, setOpen: any) => (
          <span style={{ cursor: 'default' }}>
            {props?.pagination?.pageSize || 0}
            <i
              onClick={() => setOpen(!open)}
              className={`gg-chevron ${
                open ? 'gg-chevron-up' : 'gg-chevron-down'
              }`}
            />
          </span>
        )
      }
    >
      <For each={PAGINATION_LIMIT}>
        {(limit) => (
          <DropdownMenu
            onClick={() => props.changeLimit(limit)}
          >
            {limit}
          </DropdownMenu>
        )}
      </For>
    </Dropdown>
  );

  return (
    <PaginationWrapper>
      <div className="pagination--result">
        <div className="results">
          <span className="total--count">
            {props?.pagination?.total || 0}
          </span>
          <span className="result--text">results</span>
          {renderDropdown()}
        </div>
      </div>
      <div className="pagination--items">
        <div className="results">
          <i className="gg-chevron gg-chevron-double-left" />
          <i
            className={`gg-chevron gg-chevron-left ${
              props?.pagination?.pageNo === 1 ? 'disabled': ''
            }`}
            onClick={() => onPrev()}
          />
          <span className="page--number">
            {props?.pagination?.pageNo || 1}
            /{props?.pagination?.totalPages || 1}
          </span>
          <i
            className={`gg-chevron gg-chevron-right ${
              props?.pagination?.totalPages === props.pagination.pageNo
              ? 'disabled': ''
            }`}
            onClick={() => onNext()}
          />
          <i className="gg-chevron gg-chevron-double-right" />
        </div>
      </div>
    </PaginationWrapper>
  )
}

export default Pagination;

