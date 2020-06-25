import { RouterContext } from 'https://deno.land/x/oak@v5.0.0/mod.ts'
import { hashSync, compareSync } from 'https://deno.land/x/bcrypt@v0.2.1/mod.ts'
import { makeJwt, setExpiration } from 'https://deno.land/x/djwt@v0.9.0/create.ts'

export interface User {
  username: String
  password: String
}
export let users: User[] = [
  {
    username: 'leonardo',
    password: '$2a$10$ocPTlOZ4JsfZjslAB2eTxejMjj1ogMyxpD33miroSKDnc5Jd0jGWW',
  },
]

export const favs: any = {
  leonardo: [],
}

export const deleteFav = (ctx: RouterContext) => {
  const { id } = ctx.params
  const { username } = ctx.state.currentUser

  favs[username] = favs[username].filter((favId: string) => favId !== id)

  ctx.response.body = { favs: favs[username] }
  ctx.response.status = 200
}

export const postFav = async (ctx: RouterContext) => {
  const { id } = ctx.params
  const { username } = ctx.state.currentUser

  const alreadyExist = favs[username].some((favId: string) => favId === id)

  if (!alreadyExist) {
    favs[username].push(id)
  }
  ctx.response.body = { favs: favs[username] }
  ctx.response.status = 201
  console.log('----------------', id, username)
}

export const getFavs = async (ctx: RouterContext) => {
  const { username } = await ctx.state.currentUser

  ctx.response.status = 200
  ctx.response.body = {
    favs: favs[username],
  }
  console.log(favs)
}

export const postLogin = async (ctx: RouterContext) => {
  const { value } = await ctx.request.body()
  const { username, password } = value

  const user: any = users.find((user: User) => user.username === username)

  if (!user) {
    ctx.response.status = 403
  } else if (!compareSync(password, user.password)) {
    ctx.response.status = 403
  } else {
    const payload = {
      iss: user.username,
      exp: setExpiration(Date.now() + 1000 * 60 * 60),
    }

    const jwt = makeJwt({
      key: Deno.env.get('JWT_KEY') || 'soysecreto',
      header: {
        alg: 'HS256',
        type: 'jWT',
      },
      payload,
    })
    // ctx.cookies.set('jwt', jwt)
    ctx.response.status = 200
    ctx.response.body = { jwt }
  }
}

export const getAll = (ctx: RouterContext) => {
  ctx.response.status = 201
  ctx.response.body = users
  console.log(users)
}

export const createUser = async (ctx: RouterContext) => {
  const { value } = await ctx.request.body()

  const { password, username } = value
  const hashedPassword = hashSync(password)
  if (!password || !username) {
    ctx.response.status = 500
    ctx.response.body = 'Faltan datos'
  }
  const user: User = {
    username,
    password: hashedPassword,
  }

  users.push(user)
  ctx.response.status = 201
  ctx.response.body = users
  console.log(users)
}
