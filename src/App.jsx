import "./App.css";
import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import AllBeersPage from "./pages/AllBeersPage"
import AddBeerPage from "./pages/AddBeerPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import Navbar from "./components/Navbar";
import RandomBeersPage from "./pages/RandomBeerPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/beers" element={<AllBeersPage />}/>
        <Route path="/new-beer" element={<AddBeerPage />}/>
        <Route path="/beers/:beerId" element={<BeerDetailsPage />}/>
        <Route path="/random-beer" element={<RandomBeersPage/>}/>

        <Route path='*' element={<h1>404 Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
