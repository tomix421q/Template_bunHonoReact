import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

const app = new Hono()

const route = app.get('/api/books', (c) => {
  return c.json([
    { id: 1, title: 'Book_1', author: 'George' },
    { id: 2, title: 'Book_2', author: 'Harper lee' },
  ])
})

app.use('/*', serveStatic({ root: './dist/client' }))

export type AppType = typeof route
export default app
