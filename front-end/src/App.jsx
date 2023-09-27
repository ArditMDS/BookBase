import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import Layout from './components/Layout'
import IndexPage from './components/pages/IndexPage'
import Book from './components/pages/Book'

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Layout /> }>
      <Route index element={ <IndexPage /> } />
      <Route path="book" element={<Book />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}




