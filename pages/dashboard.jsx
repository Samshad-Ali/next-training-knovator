import { useRouter } from 'next/router'
import DashboardPage from './components/DashboardPage'
import useDashboardHook from './hooks/useDashboard'
import { privateRoutes } from './utils/privateRoutes'
const Dashboard = (props) => {
  useDashboardHook();
  return <DashboardPage />
}

export default Dashboard

export const getServerSideProps = privateRoutes()