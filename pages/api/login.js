import { withSessionRoute } from '../lib/withSession'

async function loginRoute(request, response) {
  const body = JSON.parse(request.body)
  request.session.token = body.token
  request.session.user = body.user
  await request.session.save()

  response.send({ ok: true, ...request.session.user })
}

export default withSessionRoute(loginRoute)
