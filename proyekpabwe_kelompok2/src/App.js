import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from './components/NavbarComp'
import Carousel from './components/Carousel'
import Content from './components/Content'
// import logo_Del from './Assets/logo_Del.png';
// TESS SEKIAN

function App(){
  return(
    <div className="App">
      <NavbarComp/>
      <Carousel/>
      <Content/>
    </div>
  );
}

export default App;
