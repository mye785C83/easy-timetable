import React from 'react';
import { useTable } from 'react-table';
 
 function App() {
   const data = React.useMemo(
     () => [
       {
         row: '1교시',
         mon: '',
         tue: '',
         wed: '',
         thu: '',
         fri: '',
       },
       {
         row: '2교시',
         mon: '',
         tue: '',
         wed: '',
         thu: '',
         fri: '',
       },
       {
         row: '3교시',
         mon: '',
         tue: '',
         wed: '',
         thu: '',
         fri: '',
       },
       {
        row: '4교시',
        mon: '',
        tue: '',
        wed: '',
        thu: '',
        fri: '',
      },
      {
        row: '5교시',
        mon: '',
        tue: '',
        wed: '',
        thu: '',
        fri: '',
      },
      {
        row: '6교시',
        mon: '',
        tue: '',
        wed: '',
        thu: '',
        fri: '',
      },
     ],
     []
   )
 
   const columns = React.useMemo(
     () => [
       {
         Header: '',
         accessor: 'row', // accessor is the "key" in the data
         width: 550,
       },
       {
         Header: 'Mon',
         accessor: 'mon',
         width: 150,
       },
       {
        Header: 'Tue',
        accessor: 'tue',
        width: 150,
      },
      {
        Header: 'Wed',
        accessor: 'wed',
        width: 150,
      },
      {
        Header: 'Thu',
        accessor: 'thu',
        width: 150,
      },
      {
        Header: 'Fri',
        accessor: 'fri',
        width: 150,
      },
     ],
     []
   )
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })
 
   return (
     <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px blue',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                   width: 150
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                       height: 150
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
 }

export default App
