import { createFileRoute } from '@tanstack/react-router'
import type { InferResponseType } from 'hono'
import { useEffect, useState } from 'react'
import type { AppType } from '../../../server'
import { hc } from 'hono/client'

export const Route = createFileRoute('/')({
  component: Index,
})

const client = hc<AppType>('/')

function Index() {
  const [books, setBooks] = useState<InferResponseType<typeof client.api.books.$get>>([])
  const [counter, setCounter] = useState(0)

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
    <>
      <div className='p-20 w-fit mx-auto min-w-3xl'>
        <h1 className='m-4 text-4xl'>Book list</h1>
        <ul className='list rounded-box shadow-md bg-cyan-100/50'>
          {books.map((book) => (
            <li key={book.id} className='list-row'>
              {book.title} by {book.author}
            </li>
          ))}
        </ul>
      </div>
      <div className='text-center'>
        <button className='btn btn-primary mt-4' onClick={() => setCounter((prev) => prev + 1)}>
          Click me! {counter}
        </button>
      </div>
    </>
  )
}
