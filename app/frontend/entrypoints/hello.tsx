import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { HelloIndex } from '../src/HelloIndex'

const element = document.getElementById('root');

if (!element) throw Error('Not found element id = "root"')

ReactDOM.createRoot(element).render(
  <StrictMode>
    <HelloIndex/>
  </StrictMode>
)
