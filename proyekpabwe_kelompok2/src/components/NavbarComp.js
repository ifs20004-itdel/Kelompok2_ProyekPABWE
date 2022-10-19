import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import logo_Del from '../Assets/logo_Del.png'
import Dropdown from 'react-bootstrap/Dropdown'
import "../components/Style.css"

function BasicExample() {
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }
  return (
    <Navbar bg="primary" expand="lg" className="sticky-top opacity-75">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand href='#home'>
            <img src={logo_Del} alt="logo Del" width="65" height="65" class="d-inline-block" />
            </Navbar.Brand>
            <Navbar.Brand id="letter-space" href='#home' className="text-light py-3">
                Sarjana Informatika  
            </Navbar.Brand>
          </Nav>
          <Nav id="letter-space">
            <Nav.Link href="#home" className='text-light px-4'>Beranda</Nav.Link>
            <Nav.Link href="" className='text-light px-4'>Kegiatan</Nav.Link>
            <Nav.Link href="#link" className='text-light px-4'>Prestasi</Nav.Link>
            <Nav.Link href="#link" className='text-light px-4'>Fasilitas</Nav.Link>
            <Nav.Link href="#link" className='text-light px-4'>Kontak</Nav.Link>
            <NavDropdown
              title= {<span className="text-light">Tentang Kita</span>}
              id="basic-nav-dropdown"
              alignRight
              className="dropdown"
              show={show}
              onMouseEnter={showDropdown} 
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href="/components/VisiMisi">Visi Misi</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/components/StaffDosen">Staff Dosen</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/components/StrukturOrganisasi">Struktur Organisasi</NavDropdown.Item>
          </NavDropdown>
            {/* <Dropdown className='px-4'>
                <Dropdown.Toggle 
                  id="basic-nav-dropdown"
                  show={show}
                  onMouseEnter={showDropdown} 
                  onMouseLeave={hideDropdown}>
                    Tentang Kita
                </Dropdown.Toggle>
                <Dropdown.Menu >
                    <NavDropdown.Item href="#/action-1">Visi Misi</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#/action-2">Staff Dosen</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#/action-3">Struktur Organisasi</NavDropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;