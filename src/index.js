import ReactDOM from 'react-dom/client'
import App from './App'

const personArr = [
  { id: 1, name: 'Arto Hellas', number: '040-1111111' },
  { id: 2, name: 'Grace Hopper', number: '040-2222222' }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App personArr={personArr} />
)