import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/index.scss'

// REDUX
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
