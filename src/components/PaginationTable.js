import React, {useMemo} from 'react'
import { useTable, usePagination } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'
import { AiOutlineEye } from 'react-icons/ai'

const PaginationTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      nextPage,
      previousPage,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPageLabel,
      state,
      initialState,
      prepareRow
    } = useTable({
      columns,
      data
    },
    usePagination
    )
    initialState.pageSize = 8
    const { pageIndex } = state
  return (
    < div className='table-box'>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')} </td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    <div>
        <button onClick={() => gotoPage(0)} >First</button>
        <button onClick={() => gotoPage(0)} >1</button>
        <button onClick={() => gotoPage(1)} >2</button>
        <button onClick={() => gotoPage(2)} >3</button>
        <button onClick={() => gotoPage(3)} >4</button>
        <button onClick={() => gotoPage(4)} >5</button>
        <button onClick={() => gotoPage(5)} >6</button>
        <button onClick={() => gotoPage(6)} >7</button>
        <button onClick={() => gotoPage(7)} >8</button>
        <button onClick={() => gotoPage(8)} >9</button>
        <button onClick={() => gotoPage(9)} >10</button>
        <button onClick={() => gotoPage(pageCount - 1)} >Last</button>
    </div>
  </div>
  )
}

export default PaginationTable