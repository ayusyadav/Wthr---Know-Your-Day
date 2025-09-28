import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Mainweb from './componentes/Mainweb'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Mainweb /> </>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
