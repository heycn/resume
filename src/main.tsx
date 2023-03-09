import React from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:uno.css'
import { App } from './App'
import './index.scss'

const div = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(div)
root.render(<App />)
