import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { StoreProvider } from './hooks.context'
import { CustomerListStore } from './pages/customerList/store'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import 'react-tabs/style/react-tabs.css'

const store = {
  customerListStore: new CustomerListStore(),
}

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
