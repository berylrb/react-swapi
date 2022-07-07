import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import StarshipList from './StarshipList';

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<StarshipList />}/>
          <Route path="/starship-details" element={<StarshipDetails />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
