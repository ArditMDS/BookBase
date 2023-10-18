import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import { useState, useEffect } from 'react'

import Layout from './components/Layout'
import IndexPage from './components/pages/IndexPage'
import BookPage from './components/pages/BookPage'
import SearchResult from './components/pages/SearchResult'

export default function App() {

  const [bookData, setBookData] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/all-books")
      .then(res => res.json())
      .then(data => setBookData(data.result))
  }, [])

  console.log(bookData);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Layout /> }>
      <Route index element={ <IndexPage /> } />
      <Route path="1" element={<BookPage />} />
      <Route path="/results" element={<SearchResult />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}




