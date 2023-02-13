import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import { HooksApp } from './HooksApp'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterWithCustonHook } from './01-useState/CounterWithCustonHook'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-example/MultipleCustomHooks'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MultipleCustomHooks/>
  // </React.StrictMode>
)
