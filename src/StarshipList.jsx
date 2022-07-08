
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
        <div className="list-header">
          <h3>Starship Fleet</h3>
        </div>
        <div className="page-body">
          <div className="card-container">
            {starships.map(starshipName =>
              
                <Link className="ship-link" to="/starship" state={{starshipName}}>
                  <div className="ship-div" key={starshipName.index}>
                    {starshipName.name}</div></Link>
            )}
          </div>
        </div>
      </div>
    
    </>
  )


}

export default StarshipList