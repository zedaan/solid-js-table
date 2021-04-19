import { styled } from "solid-styled-components";

const Wrapper = styled("div")`
  width: 100%;

  table {
    width: 99%;
    border-collapse: collapse;
    min-width: 1024px;

    tbody td,
    thead th {
      color: ${({ theme }: any) => theme.colors.primaryText};
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 16px;
      text-align: left;
      padding: 10px 15px;
      
      & > input {
        cursor: pointer;
      }
    }

    tbody td {
      font-weight: normal;
      font-size: 15px;
      line-height: 16px;

      &:last-child {
        cursor: pointer;
      }
    }

    tbody tr td {
      border: none;

      &:hover {
        border: rgba(0, 0, 0, 0.15);
        background-color: "#fcfcfc";
      }
    }

    tbody tr {
      border: 1px solid transparent;
      
      &:hover .fixed__cell,
      &.active .fixed__cell,
      &:hover .fixed_header,
      &.active .fixed_header {
        background: ${({ theme }) => theme.colors.grey};
      }
      
      &:hover,
      &.active {
        border: 1px solid rgba(0,0,0,0.1);
        background: ${({ theme }) => theme.colors.grey};
      }
    }

    thead tr th {
      input {
        cursor: pointer;
      }
    }

    .fixed--header__row {
      th {
        position: sticky;
        top: 0;
        background: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .ellipsis {
    height: 4px;
    width: 4px;
    background: #555;
    margin: 5px auto;
    border-radius: 50%;
  }

  .sort-icon {
    color: ${({ theme }) => theme.colors.inActive};
    font-size: 8px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    
    span {
      line-height: 1.2;
      display: block;
    }

    .active {
      color: ${({ theme }) => theme.colors.primaryText}; 
    }
  }

  .th__sorter {
    display: flex;
    cursor: pointer;
  }
`;

export default Wrapper;
