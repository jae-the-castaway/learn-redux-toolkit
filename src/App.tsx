import React, {useState} from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, amountAdded } from './features/counter/counter-slice'
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch()

  const [numDogs, setNumdogs] = useState(10)

  const { data = [], error, isFetching} = useFetchBreedsQuery(numDogs)

  function handleClick() {
    dispatch(amountAdded(3))
  }
  
  return (
    <div className="App">
      <div>

      </div>
      <h1>Learn Redux</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>

      <div>
        <p>Dogs to fetch:</p>
        <select value={numDogs} onChange={(e) => setNumdogs(Number(e.target.value))}>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
        </select>
      </div>

      <div>
      <p>Number of dogs fetched: {data.length}</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {data.map((breed) => (
          <tr key={breed.id}>
            <td>{breed.name}</td>
            <td>
              <img src={breed.image.url} alt={breed.name} height={250} />
            </td>
          </tr>

          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default App
