import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import logo_Del from '../Assets/logo_Del.png'
import { Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Prestasi from './Prestasi';
import Footer from './Footer';
import StrukturOrganisasi from './StrukturOrganisasi';
import "../components/Style.css"
import Kegiatan from './Kegiatan';


function BasicExample() {
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }
    return (
      <><Navbar bg="primary" expand="lg" className="sticky-top opacity-75">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand href='/'>
                <img src={logo_Del} alt="logo Del" width="65" height="65" class="d-inline-block" />
              </Navbar.Brand>
              <Navbar.Brand id="letter-space" href='/' className="text-light py-3">
                Sarjana Informatika
              </Navbar.Brand>
            </Nav>
            <Nav id="letter-space">
              <Nav.Link href="/" className='text-light px-4'>Beranda</Nav.Link>
              <Nav.Link href="/kegiatan" className='text-light px-4'>Kegiatan</Nav.Link>
              <Nav.Link href="/prestasi" className='text-light px-4'>Prestasi</Nav.Link>
              <Nav.Link href="#link" className='text-light px-4'>Fasilitas</Nav.Link>
              <Nav.Link href="/kontak" className='text-light px-4'>Kontak</Nav.Link>
              <NavDropdown
                title={<span className="text-light">Tentang Kita</span>}
                id="basic-nav-dropdown"
                alignRight
                className="dropdown"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item href="visiMisi">Visi Misi</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="staffDosen">Staff Dosen</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/organisasi">Struktur Organisasi</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
          <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/kegiatan' element={<Kegiatan/>}></Route>
            <Route path='/prestasi' element={<Prestasi/>}></Route>
            <Route path='/organisasi' element={<StrukturOrganisasi/>}></Route>
          </Routes>
      </div></>
    );
  }


export default BasicExample;