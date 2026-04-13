import { Link } from 'react-router-dom'
import './page.css'

export default function NotFound() {
  return (
    <div className="page" style={{ textAlign: 'center', padding: '10rem 0' }}>
      <p className="section-label">404 Error</p>
      <h1 className="page__title">Page not found</h1>
      <p className="block__intro" style={{ margin: '0 auto 2rem' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn--primary">
        Back to Home
      </Link>
    </div>
  )
}
