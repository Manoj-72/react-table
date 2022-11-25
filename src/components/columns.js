import { AiOutlineEye } from 'react-icons/ai'
import { RiDeleteBinLine } from 'react-icons/ri'

export const COLUMNS = [
    {
        Header: "S.no",
        Footer: "S.no",
        accessor:'id',
    },
    {
        Header: "Name",
        Footer: "Name",
        accessor: 'name',
        Cell: (row) => (<div className="table-price">{row.value}</div>)
    },
    {
        Header: "Tag no",
        Footer: "Tag no",
        accessor: 'tag_number',
    },
    {
        Header: "Date of purchase",
        Footer: "Date of purchase",
        accessor: 'date',
    },
    {
        Header: "Pay detail",
        Footer: "Pay detail",
        accessor: 'price',
        Cell: (row) => (<div className="table-price">{`${row.value}Rs`}</div>)
    },
    {
        Header: "Action",
        Footer: "Action",
        Cell: () => (
            <div className='table-icons'>
            <AiOutlineEye code="FR" size={20} />
            <RiDeleteBinLine code="FR" size={20}/>
            </div>
        )
    }
]