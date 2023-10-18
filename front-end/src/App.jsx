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
    fetch("http://127.0.0.1:8000/all-books", {
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((data) => {
        if(data.code_reponse !== 200)  {
          fetch("https://127.0.0.1:8000/all-books", {
            method: "GET",
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json'
            }
          })
              .then(res => res.json())
              .then(data => setBookData(data.result))
              .catch((error) => {
                console.error('error', error)
              })
        } else {
          setBookData(data.result)
        }
      })
        .catch((error) => {
          console.error('error', error)
        })
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




