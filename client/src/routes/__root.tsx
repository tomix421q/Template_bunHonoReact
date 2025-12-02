import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => {
  return (
    <div>
      <nav className='p-2 flex gap-2'>
        <Link to='/' className='btn btn-link [&.active]:btn-active!'>
          Home
        </Link>
        <Link to='/about' className='btn btn-link [&.active]:btn-active!'>
          About
        </Link>
      </nav>

      <hr />

      <main className='px-2 max-w-7xl mx-auto mt-10'>
        <Outlet />
        <TanStackRouterDevtools />
      </main>
    </div>
  )
}

export const Route = createRootRoute({ component: RootLayout })
