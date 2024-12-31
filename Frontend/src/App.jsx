import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Create_book from './pages/Create_book'
import Show_book from './pages/Show_book'
import Delete from './pages/Delete'
import Edit from './pages/Edit'

const App = () => {
  return (
    <>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<Create_book />} />
        <Route path="/books/details/:id" element={<Show_book />} />
        <Route path="/books/edit/:id" element={<Edit />} />
        <Route path="/books/delete/:id" element={<Delete />} />
      </Routes>
    </>
  )
}

export default App