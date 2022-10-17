import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from './components/NavbarComp'
import Carousel from './components/Carousel'
import Content from './components/Content'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App(){
  return(
    <div className="App">
      <NavbarComp/>
      <Carousel/>
      <Content/>
      <Footer/>
      {/* <Router>
        <Route path='/' element={<Footer/>}></Route>
      </Router> */}
    </div>
  );
}

export default App;
