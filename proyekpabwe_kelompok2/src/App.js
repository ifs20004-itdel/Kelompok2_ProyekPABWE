import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from './components/NavbarComp'
import Homepage from './components/Homepage'
import Kegiatan from './components/Kegiatan'
import VisiMisi from './components/VisiMisi'
import Prestasi from './components/Prestasi'
import StrukturKurikulum from './components/StrukturKurikulum'
import {Routes, Route} from 'react-router-dom';

function App(){
  return(
    <>
    <div className="App">
      <NavbarComp/>
    </div>
    <div>
      <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/kegiatan' element={<Kegiatan />}></Route>
          <Route path='/visiMisi' element={<VisiMisi />}></Route>
          <Route path='/prestasi' element={<Prestasi />}></Route>
          <Route path='/kurikulum' element={<StrukturKurikulum />}></Route>
          <Route path='/artikel1' element={<StrukturKurikulum/>}></Route>
      </Routes>
    </div>

    </>
  );
}

export default App;
