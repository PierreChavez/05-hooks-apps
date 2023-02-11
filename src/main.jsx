import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import { CounterApp } from './01-usestate/CounterApp'
import { CounterWithCustonHook } from './01-usestate/counterWithCustonHook'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustonHook />
  </React.StrictMode>,
)
