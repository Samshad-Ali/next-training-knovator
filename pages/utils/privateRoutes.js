import { withSessionSsr } from "../lib/withSession"
import { routes } from "./routes"

export const privateRoutes = () =>{
    return withSessionSsr(async(context) => {
        const { req } = context
        const { user, token } = req.session
        if (!user || !token) {
          return {
            redirect: {
              destination: routes.login, // Replace with the actual path
              permanent: false,
            },
          }
        }
        return {    
          props: { user, token },
        }
      })
}