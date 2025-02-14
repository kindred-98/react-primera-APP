import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifAPP } from './GifAPP'
import React from 'react'
import "./styles.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < GifAPP />
  </StrictMode>,
)
