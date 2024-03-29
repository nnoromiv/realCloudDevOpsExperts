import './App.css'
import { useEffect, useState } from 'react'
import Loading from './components/Loading'
import Home from './page/Home'


function App() {
  const [load, setLoad] = useState(true)

  useEffect(() => {

      const intervalId = setInterval(() => {
          setLoad(false)
      }, 2500)

      return () => clearInterval(intervalId)

  }, [])

  return (
    <>
            {
                load ? <Loading />
                    :
                    <>
                      <Home />
                    </>
            }
        </>
  )
}

export default App
