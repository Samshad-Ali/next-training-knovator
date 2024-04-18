import ProfilePage from './components/ProfilePage'
import useProfileHook from './hooks/useProfile'
import { privateRoutes } from './utils/privateRoutes'

const Profile = () => {
  const { handleSubmit, register, errors, onSubmit } = useProfileHook();
    
  return (
      <ProfilePage
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        onSubmit={onSubmit}
      />
  )
}

export default Profile;

export const getServerSideProps = privateRoutes()