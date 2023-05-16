import { useMemo } from "react";
import { useTable, usePagination } from "react-table";

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  const memoizedData = useMemo(() => data, [data]);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
      </div>
    </>
  );
};

const columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Mobile Number",
    accessor: "mobile",
  },
];

const data = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    mobile: "1234567890",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    mobile: "0987654321",
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    mobile: "5551234567",
  },
  {
    name: "Alice Williams",
    email: "alice.williams@example.com",
    mobile: "5559876543",
  },
  {
    name: "Chris Brown",
    email: "chris.brown@example.com",
    mobile: "5555555555",
  },
  {
    name: "Chris Brown",
    email: "chris.brown@example.com",
    mobile: "5555555555",
  },
];

const TableComponent = () => {
  return <Table columns={columns} data={data} />;
};

export default TableComponent;
