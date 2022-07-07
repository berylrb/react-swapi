
import { useState, useEffect } from 'react'
import { getStarshipList } from './services/sw-api'

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarships(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return (
    <>
      <div>
        <h3>Starship List</h3>
        <div className="card-container">
          {starships.map(starshipName =>
            <div className="class-div" key={starshipName.index}>
              {starshipName.name}
            </div>
          )}
        </div>
      </div>
    
    </>
  )


}

export default StarshipList