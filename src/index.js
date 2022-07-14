import ReactDOM from 'react-dom/client'
import App from './App'

const personArr = [
  { id: 1, name: 'Arto Hellas' },
  { id: 2, name: 'Grace Hopper' }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App personArr={personArr} />
)