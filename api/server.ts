import { Application, Router } from 'https://deno.land/x/oak@v5.0.0/mod.ts'
import { oakCors } from 'https://deno.land/x/cors/mod.ts'
import { createUser, postLogin, getFavs, getAll, postFav,deleteFav } from './routes.ts'
import { userMiddleware } from './userMiddleware.ts'
import { authMiddleware } from './authMiddleware.ts'

const app = new Application()
const router = new Router()

app.use(userMiddleware, oakCors())

router
  .get('/', getAll)
  .get('/favs', authMiddleware, getFavs)
  .post('/favs/:id', authMiddleware, postFav)
  .post('/favs/:id', authMiddleware, deleteFav)
  .post('/login', postLogin)
  .post('/register', createUser)

app.addEventListener('error', (e) => {
  console.log(e.error)
})

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port: 8000 })
console.log('Server running 8000')
