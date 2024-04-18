import UsersPage from './components/UsersPage'
import useUsersHook from './hooks/useUsers'
import { privateRoutes } from './utils/privateRoutes'

const Users = () => {
    
  return <UsersPage />
}

export default Users

export const getServerSideProps = privateRoutes()
