import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index.jsx'

import './index.css'
import './styles/backgrounds.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  </Router>
)
