import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Coaching from './pages/Coaching.jsx'
import NotFound from './pages/NotFound.jsx'

import Admin from './pages/admin/Admin.jsx'

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/changewithfingrty" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
