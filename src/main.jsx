import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import routes from './routes'

ReactDOM.createRoot(document.getElementById('root')).render( 
  //COMPONENTLERİN İKİ KERE RENDER OLMASINI SAĞLAYAN YER 
  <React.StrictMode> 
  <RouterProvider router={routes}>

  </RouterProvider>
  </React.StrictMode>,
)
