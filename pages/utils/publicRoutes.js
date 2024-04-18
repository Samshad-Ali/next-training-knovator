import { withSessionSsr } from "../lib/withSession"
import { routes } from "./routes"

export const publicRoutes = () =>{
    return withSessionSsr(async(context) => {
        const { req } = context
        const { user, token } = req.session
        if (user || token) {
          return {
            redirect: {
              destination: routes.dashboard, // Replace with the actual path
              permanent: false,
            },
          }
        }
        return {    
          props: {}
        }
      })
}