import React from 'react'

const App = () => {
  return (
    <div>
      <button>Mostrar modal</button>
      {
        [...Array(10)].map(()=> <p>Estos es una prueba</p>)
      }
    </div>
  )
}

export default App
