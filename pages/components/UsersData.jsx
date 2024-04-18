import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import useUsersHook from '../hooks/useUsers'
import UserColumns from '../utils/usersColumn.js'
const UsersData = () => {
  const { usersData } = useUsersHook();
  const columns = UserColumns()
  const data = useMemo(() => {
    if (!usersData) {
      return [];
    }

    return usersData.map((data, index) => ({
      index: index + 1,
      id: data?._id,
      name: data?.name,
      email: data?.email,
      phoneNumber: data?.mobNo,
      roles: data?.roles[0]?.roleId?.name,
      isActive: data?.isActive,
      created: new Date(data?.createdAt).toLocaleDateString(),
      lastLogin: new Date(data?.lastLogin).toLocaleString(),
    }));
  }, [usersData]);
    const {
    getTableProps,
    headerGroups,
    rows,
    getTableBodyProps,
    prepareRow,
  } = useTable({
    columns,
    data
  })
  return (
    <div className=" bg-white rounded-md border">
      <table
        {...getTableProps()}
        className="w-full border rounded-md border-gray-300"
      >
        <thead className="bg-gray-100">
          {headerGroups.map((hg, index) => (
            <tr className="" key={index} {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column, index) => (
                <th
                  className="p-3 border"
                  key={index}
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className=" w-full h-[830px] overflow-y-auto" {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row)
            return (
              <tr className="" key={index} {...row.getRowProps()}>
                {row.cells.map((cell, index) => (
                  <td
                    className="p-3 border"
                    key={index}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="w-full flex justify-between items-center p-4">
        <div className="text-gray-700 flex items-center gap-4">
          <p>View</p>
          <select className="p-2 px-3 bg-transparent rounded-md border">
            <option className="10">10</option>
            <option className="20">20</option>
            <option className="30">30</option>
            <option className="40">40</option>
            <option className="50">50</option>
          </select>
          <p>Records per page</p>
        </div>
        <div className="flex items-center gap-4 text-gray-700">
          <p className="tracking-wide">Showing 1 to 20 of 34 records</p>
          <button className="bg-cyan-500 p-2 px-3 rounded-md text-white">
            Previous
          </button>
          <div className="flex items-center gap-2">
            <p>Page</p>
            <span className="p-2 px-6 rounded-md border">1</span>
            <span>of</span>
            <p>2</p>
          </div>
          <button className="bg-cyan-500 p-2 px-3 rounded-md text-white">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default UsersData
