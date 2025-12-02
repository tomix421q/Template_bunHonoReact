import { createFileRoute } from '@tanstack/react-router'
import { hc, type InferResponseType } from 'hono/client'
import type { AppType } from '../../../server'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/about')({
  component: About,
})

const client = hc<AppType>('/')
function About() {
  const [books, setBooks] = useState<InferResponseType<typeof client.api.books.$get>>([])

  useEffect(() => {
    const fetchBooks = async () => {
      // standard Fetch metod
      // const resp = await fetch('/api/books')
      // RPC with types
      const resp = await client.api.books.$get()
      const data = await resp.json()
      setBooks(data)
    }
    fetchBooks()
  }, [])

  return (
    <div>
      Hello "/about"!
      <div className='p-20 w-fit mx-auto min-w-3xl'>
        <h1 className='m-4 text-4xl'>Book list</h1>
        <ul className='list rounded-box shadow-md bg-secondary'>
          {books.map((book) => (
            <li key={book.id} className='list-row'>
              {book.title} by {book.author}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
