import React from 'react'
import { Link } from 'react-router-dom'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '10rem 2rem', 
          textAlign: 'center', 
          fontFamily: 'system-ui, sans-serif'
        }}>
          <h1 style={{ color: '#0f2b46' }}>Something went wrong.</h1>
          <p style={{ color: '#4a5f72', marginBottom: '2rem' }}>
            We're sorry for the inconvenience. Please try refreshing the page.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            style={{
              padding: '1rem 2rem',
              background: '#0f2b46',
              color: 'white',
              border: 'none',
              borderRadius: '999px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Back to Home
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
