import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalStyle } from './styles/GlobalStyles.js'
import { store } from './Redux/store.js'
import { Provider } from "react-redux"

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </>
  // </StrictMode>,
)
