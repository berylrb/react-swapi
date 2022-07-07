import { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from './services/sw-api'
import { Link } from 'react-router-dom'

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipDetails = await getDetails(location.state.starshipName.url)
      setStarshipDetails(starshipDetails)
    }
    fetchDetails()
  }, [location.state.starshipName.url])

  return (
    <>
      <div>
        {starshipDetails.name ?
        <>
          <div className="ship-deets">
            <div className="ship-name">
              <h3>Name:</h3>
              {starshipDetails.name}
            </div>
            <div className="ship-model">
              <h3>Model:</h3>
              {starshipDetails.model}
            </div>
            <div className="return-link">
              <Link to="/">Return</Link>
            </div>
          </div>
        </>
        :
        <>
          <p>Loading starship details...</p>
        </>
        }   
      </div>
    </>
  )
}

export default StarshipDetails