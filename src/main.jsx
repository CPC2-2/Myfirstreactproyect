import React from 'react'; //Remember to import the class react at the start of the proyect
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <App/>
);

