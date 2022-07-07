
import { useState, useEffect } from 'react'
import { getStarshipList } from './services/sw-api'
import { Link } from 'react-router-dom'

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
              <Link to="/starship" state={{starshipName}}>{starshipName.name}</Link>
            </div>
          )}
        </div>
      </div>
    
    </>
  )


}

export default StarshipList