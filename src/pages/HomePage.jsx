import { Link } from "react-router-dom";
import Beers from "../assets/beers.png"
import RandomBeer from "../assets/random-beer.png"
import NewBeer from "../assets/new-beer.png"

function HomePage() {
  return (
    <>
      <Link to="/beers">
        <img src={Beers} />
        <h1>All Beers</h1>
      </Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta lobortis tincidunt. Curabitur ut mauris eget sem bibendum commodo pulvinar at ex. Suspendisse pulvinar ornare sapien, et pulvinar felis. Etiam pellentesque pulvinar mauris, quis commodo nunc dictum nec. Sed auctor urna ut massa tempus, sed dictum est tincidunt. Nulla facilisi. Proin viverra laoreet neque, quis sollicitudin ipsum posuere ac. Mauris ac libero ante. Suspendisse posuere lacus quis commodo ullamcorper. Ut eget dapibus ligula. Fusce lacinia felis ac erat gravida condimentum. Aenean eleifend blandit finibus. Proin pulvinar velit a rhoncus sollicitudin. Suspendisse sed sagittis arcu.</p>
      <Link to="/random-beer">
      <img src={RandomBeer} />
        <h1>Random Beer</h1>
      </Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta lobortis tincidunt. Curabitur ut mauris eget sem bibendum commodo pulvinar at ex. Suspendisse pulvinar ornare sapien, et pulvinar felis. Etiam pellentesque pulvinar mauris, quis commodo nunc dictum nec. Sed auctor urna ut massa tempus, sed dictum est tincidunt. Nulla facilisi. Proin viverra laoreet neque, quis sollicitudin ipsum posuere ac. Mauris ac libero ante. Suspendisse posuere lacus quis commodo ullamcorper. Ut eget dapibus ligula. Fusce lacinia felis ac erat gravida condimentum. Aenean eleifend blandit finibus. Proin pulvinar velit a rhoncus sollicitudin. Suspendisse sed sagittis arcu.</p>
      <Link to="/new-beer">
      <img src={NewBeer} />
        <h1>New Beer</h1>
      </Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta lobortis tincidunt. Curabitur ut mauris eget sem bibendum commodo pulvinar at ex. Suspendisse pulvinar ornare sapien, et pulvinar felis. Etiam pellentesque pulvinar mauris, quis commodo nunc dictum nec. Sed auctor urna ut massa tempus, sed dictum est tincidunt. Nulla facilisi. Proin viverra laoreet neque, quis sollicitudin ipsum posuere ac. Mauris ac libero ante. Suspendisse posuere lacus quis commodo ullamcorper. Ut eget dapibus ligula. Fusce lacinia felis ac erat gravida condimentum. Aenean eleifend blandit finibus. Proin pulvinar velit a rhoncus sollicitudin. Suspendisse sed sagittis arcu.</p>
    </>
  );
}

export default HomePage;
