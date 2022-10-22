import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import img1 from '../Assets/header.jpg'
import img2 from '../Assets/coba1.jpg'
import Footer from './Footer'

function Artikel2(){
    return(
        <><figure className='position-relative'>
        <img
            className=" w-100 fluid"
            src={img1}
            style={{ height: '350px', objectFit: 'cover' }}
            alt="Plaza IT Del" />
        <figcaption className='h1 text-light px-5 py-4 bg-primary bg-gradient bg-opacity-75 rounded-3'>
            IT DEL NEWS
        </figcaption>
    </figure>
        <Container className='d-flex'> 
        <div className='mt-2 w-25 me-4'>
            <h4 className='bg-primary rounded-3 px-4 py-3'>Related News</h4>
            <Nav className=' bg-secondary bg-opacity-25 bg-gradient nav flex-column rounded-3 py-3 px-4 w-100'>
                <Nav.Link href="/artikel1" className='text-dark txtHover'>Program Pembinaan Mahasiswa Wirausaha(P2MW)</Nav.Link>
                <hr></hr>
                <Nav.Link href="/artikel3" className='text-dark txtHover'> Pengukuhan Mahasiswa IT Del Angkatan 2022</Nav.Link>
            </Nav>
        </div>
            <Container className='mt-2 mb-5 bg-light bg-opacity-25 rounded-4 border border-secondary'>
                <h2 className='text-center pt-4'>
                    FITE E-Sport
                </h2>
                <div className='text-center p-5'>
                    <Image 
                        className=" w-50 fluid "
                        src={img2}
                        style={{ objectFit: 'cover' }}
                        alt="Fite_esport"
                    >
                    </Image>
                </div>
                <div className='w-75 m-auto pb-4'>
                    <p>
                        Dalam memperingati se-windu Fakultas Informatika dan Teknik Elektro (FITE), FITE melakukan perlombaan E-Sport yang melibatkan para mahasiswa FITE. 
                        Beragam permainan E-Sport yang diperlombakan seperti Mobile Legend, Free Fire, Player Unknown's Battlegrounds (PUBG) Mobile, Pro Evolution Soccer (PES) Mobile, Ludo, Duolinggo.
                    </p>
                    <p>
                        Selain permainan E-Sport tersebut, ada juga pertandingan Scrabble untuk mengasah kemampuan bahasa inggris mahasiswa, 
                        Catur untuk mengasah pola berpikir mahasiswa, serta perancangan banner visi-misi dan photobooth. 
                        Kegiatan dilakukan dalam 2 hari, yaitu di hari Kamis 25 Agustus dan Jumat 26 Agustus. Kegiatan tersebut mengundang antusiasme dari mahasiswa untuk mengikuti berbagai jenis perlombaan tersebut. Berbagai keseruan juga tampak terlihat ketika para mahasiswa tersebut bertanding untuk melawan satu sama lain.
                    </p>
                    <p>
                        Tak luput dari tujuan utama dibuatkan pertandingan ini adalah untuk mengeratkan tali persaudaraan antar sesama program studi yang ada di Fakultas Informatika dan Teknik Elektro.
                        Selain tali persaudaraan, diharapkan juga para mahasiswa melalui ajang kompetisi ini, dapat sebagai sarana kompetisi yang memicu nyali para mahasiswa untuk bersaing antar prodi dalam mendapatkan prestasi-prestasi yang lebih unggul guna membawa FITE semakin lebih maju dan semakin lebih berprestasi.
                    </p>
                </div>
            </Container>
        </Container>
        <Footer/>
</>
    );
}

export default Artikel2;