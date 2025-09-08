import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.css'
import router from '@/router/router'
import AlertMessages from '@/components/common/alerts/AlertMessages'
import GlobalAppContextProvider from '@/context/GlobalAppContextProvider'

createRoot(document.getElementById('root')).render(
    <StrictMode>
		<GlobalAppContextProvider>
            <AlertMessages />
            <RouterProvider router={router} />
        </GlobalAppContextProvider>
    </StrictMode>,
)
