import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage/HomePage'
import { ArticlePage } from './pages/ArticlePage/ArticlePage'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'

export const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/article/:id" element={<ArticlePage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)

export default App
