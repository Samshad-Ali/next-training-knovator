import { useMemo } from 'react'
import Toggler from '../components/Toggler';
import Icons from '../components/Icons';


const UserColumns = () => {
  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'index',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      ,
      {
        Header: 'Email',
        accessor: 'email',
      },
      ,
      {
        Header: 'Phone Number',
        accessor: 'phoneNumber',
      },
      {
        Header: 'Roles',
        accessor: 'roles',
      },
      {
        Header: 'Created',
        accessor: 'created',
      },
      {
        Header: 'Last Login',
        accessor: 'lastLogin',
        Cell:(lastLogin) => {
          if(lastLogin?.value=='Invalid Date'){
           return '';
          }else{
            return lastLogin.value
          }
        }
      },
      {
        Header: 'Active',
        accessor: 'isActive',
        Cell:({ row: { original = {} } })=>(
          // console.log('from column',row)
          <Toggler original={original} />
        )
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell:()=>(
          <Icons/>
        )
      },
    ],
    [],
  )

  return columns;
}

export default UserColumns
