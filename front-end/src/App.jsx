import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import Layout from './components/Layout'
import IndexPage from './components/pages/IndexPage'
import BookPage from './components/pages/BookPage'

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Layout /> }>
      <Route index element={ <IndexPage /> } />
      <Route path="1" element={<BookPage />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}




