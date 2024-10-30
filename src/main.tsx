import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
      {
          path: '/',
          element: <App />,
          children: [
              {
                  path: '/test',
                  element: (
                    <TestRoute />
                  ),
              },
          ]
      }
  ],
  { basename: import.meta.env.BASE_URL }
);

import './index.css'
import App from './App.tsx'
import { TestRoute } from './routes/TestRoute.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
