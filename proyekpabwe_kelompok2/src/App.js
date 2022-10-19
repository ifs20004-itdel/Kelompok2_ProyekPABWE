import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from './components/NavbarComp'
import Carousel from './components/Carousel'
import Content from './components/Content'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


function App(){
  return(
    <div className="App">
      <NavbarComp/>
      <Carousel/>
      <Content/>
      <Footer/>
      {/* <BrowserRouter> */}
        {/* <Router> */}
          {/* <Route path='/' element={<Content/>}>
            <Route path='/' element={<Content/>}/>
            {/* <Route path='/Footer' element={</>}/> */}
          {/* </Route> */}
        {/* </Router> */}
      {/* </BrowserRouter> */}
      
    </div>
  );
}

export default App;
