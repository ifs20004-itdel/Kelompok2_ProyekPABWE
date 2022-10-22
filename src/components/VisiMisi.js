import img1 from '../Assets/plaza_ItDel.jpg'
import "../components/Style.css"
import { Container, Nav } from 'react-bootstrap';
import Footer from '../components/Footer';

function VisiMisi(){
    return(
      <>
        <figure className='position-relative'>
          <img
            className=" w-100 fluid"
            src={img1}
            style={{height: '350px',objectFit: 'cover'}}
            alt="Plaza IT Del"
          />
          <figcaption className='h1 text-light px-5 py-4 bg-dark bg-gradient bg-opacity-50 rounded-3' >
            VISI DAN MISI
          </figcaption>
        </figure>
        <Container className='d-flex my-5'>
          <div>
              <Nav className=' bg-secondary bg-opacity-25 bg-gradient nav flex-column rounded-3 py-3 px-4 w-100'>
                <Nav.Link href="/visiMisi" className='text-dark py-3 txtHover'>Visi dan Misi</Nav.Link>
                <Nav.Link href="/staffDosen" className='text-dark py-3 txtHover'>Dosen Staff </Nav.Link>
                <Nav.Link href="/prestasi" className='text-dark py-3 txtHover'> Prestasi</Nav.Link>
                <Nav.Link href="/kurikulum" className='text-dark py-3 txtHover'> Struktur Kurikulum</Nav.Link>
              </Nav>
          </div>
          <div className='container w-75 rounded-3' >
            <div className='px-5 mt-5 mb-4'>
              <h1>VISI</h1>
              <hr></hr>
              <p>"Menjadi program Sarjana Informatika yang unggul yang berperan dalam menghasilkan 
                dan mamanfaatkan teknologi untuk mengembangkan potensi lokal bagi kemajuan bangsa pada tahun 2023"</p>
            </div>
            <div className='px-5 mt-5 mb-4'>
              <h1>MISI</h1>
              <hr></hr>
              <ol>
                <li>Menyelenggarakan pendidikan informatika yang bermutu, profesional dan diperhitungkan secara nasional.</li>
                <li>Menyelenggarakan penelitian yang mendukung kemajuan IPTEK, yang bermanfaat bagi pengembangan industri.</li>
                <li>Melakukan pengabdian kepada masyarakat dalam bidang informatika.</li>  
              </ol>
            </div>
            <div className='px-5 mt-5 mb-4'>
              <h1>TUJUAN</h1>
              <hr></hr>
              <p>Tujuan pendidikan Program Studi Sarjana Informatika IT Del adalah:</p>
              <ol>
                <li>Menghasilkan ahli informatika yang berperilaku MarTuhan, Marroha, Marbisuk, yang memiliki karir
                  yang sukses dan menjadi seorang profesional yang produktif di bidang teknologi informasi.
                </li>
                <li>Menghasilkan karya-karya ilmiah yang memberi dampak mensejahterakan masyarakat.</li>
                <li>Menghasilkan, mengembangkan, dan menyebarluaskan ilmu pengetahuan dan teknologi melalui penyelenggaraan
                  penelitian dan pendidikan tinggi yang berorientasi pendidikan keilmuan dan pengembangan kepribadian.
                  </li>  
              </ol>
            </div>
          </div>
        </Container>
        <Footer />
      </>
    );
}
export default VisiMisi;