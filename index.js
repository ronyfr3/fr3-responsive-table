import styled from "styled-components";

const ResponsiveTable = styled.table`
  width: 100%;
  @media screen and (max-width: 600px) {
    table {
      border: 0;
      width: 100%;
    }
    th {
      width: 100%;
    }
    table thead {
      border: none;
      overflow: hidden;
      padding: 0;
    }

    table tr {
      border-bottom: 1px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
      margin: 0 0 1rem 0;
    }

    table td {
      display: block;
      font-size: 0.8em;
      text-align: right;
      &:nth-child(2n) {
        background-color: #f8f8f8;
      }
    }

    table td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    table td:last-child {
      border-bottom: 0;
    }
  }
`;
export default ResponsiveTable;
