import { Context } from 'https://deno.land/x/oak@v5.0.0/mod.ts'
import { validateJwt } from 'https://deno.land/x/djwt/validate.ts'
import { User, users } from './routes.ts'

export const userMiddleware = async (ctx: Context, next: Function) => {
  const { value = {} } = await ctx.request.body()

  let { jwt } = value

  if (!jwt) {
    jwt = ctx.request.headers.get('authorization')
    // jwt = ctx.cookies.get('jwt')
  }
  console.log('[usermiddleware]', jwt)

  if (jwt) {
    const data: any = await validateJwt(jwt, Deno.env.get('JWT_KEY') || 'soysecreto')

    if (!data.isValid || data.isExpired) {
      // ctx.cookies.delete('jwt')
      ctx.response.status = 401
    } else if (data) {
      const user: any = users.find((user: User) => user.username === data.payload.iss)

      ctx.state.currentUser = user
      console.log('FOund user', { user })

      await next()
    } else {
      ctx.cookies.delete('jwt')
      await next()
    }
  } else {
    ctx.state.currentUser = null
    await next()
  }
}
