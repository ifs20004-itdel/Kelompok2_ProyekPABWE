import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from './components/NavbarComp'
import Homepage from './components/Homepage'
import Kegiatan from './components/Kegiatan'
import VisiMisi from './components/VisiMisi'
import Prestasi from './components/Prestasi'
import StrukturKurikulum from './components/StrukturKurikulum'
import Artikel1 from './components/Artikel1';
import Artikel2 from './components/Artikel2';
import Artikel3 from './components/Artikel3';
import {Routes, Route} from 'react-router-dom';
import StaffDosen from './components/StaffDosen';

function App(){
  return(
    <>
    <div className="App sticky-top">
      <NavbarComp/>
    </div>
    <div>
      <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/kegiatan' element={<Kegiatan />}></Route>
          <Route path='/laboratorium' element={<Kegiatan/>}></Route>
          <Route path='/ruangKelas' element={<Kegiatan/>}></Route>
          <Route path='/ruangBaca' element={<Kegiatan/>}></Route>
          <Route path='/ruangSidang' element={<Kegiatan/>}></Route>
          <Route path='/kontak' element={<Kegiatan/>}></Route>
          <Route path='/visiMisi' element={<VisiMisi />}></Route>
          <Route path='/staffDosen' element={<StaffDosen/>}></Route>
          <Route path='/prestasi' element={<Prestasi />}></Route>
          <Route path='/kurikulum' element={<StrukturKurikulum />}></Route>
          <Route path='/artikel1' element={<Artikel1/>}></Route>
          <Route path='/artikel2' element={<Artikel2/>}></Route>
          <Route path='/artikel3' element={<Artikel3/>}></Route>
      </Routes>
    </div>

    </>
  );
}

export default App;
