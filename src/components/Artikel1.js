import img1 from '../Assets/header.jpg'
import img2 from '../Assets/coba.jpg'
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Footer from './Footer';
function Artikel1(){
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
                    <Nav.Link href="/artikel2" className='text-dark txtHover'>FITE E-Sport </Nav.Link>
                    <hr></hr>
                    <Nav.Link href="/artikel3" className='text-dark txtHover'>Pengukuhan Mahasiswa IT Del Angkatan 2022</Nav.Link>
                </Nav>
            </div>
            <Container className='mt-2 mb-5 bg-light bg-opacity-25 rounded-4 border border-secondary'>
                <h2 className='text-center pt-4'>
                    Program Pembinaan Mahasiswa Wirausaha (P2MW)
                </h2>
                <div className='text-center p-5'>
                    <Image 
                        className=" w-50 fluid "
                        src={img2}
                        style={{ objectFit: 'cover' }}
                        alt="P2MW"
                    >
                    </Image>
                </div>
                <div className='w-75 m-auto pb-4'>
                    <p>
                        IT Del kembali menorehkan prestasi dengan meraih pendanaan dari Kementerian Riset, Teknologi, dan Pendidikan Tinggi (Kemenristekdikti) untuk mengembangkan program pembinaan mahasiswa wirausaha (P2MW).
                        Berdasarkan hasil seleksi, salah satu tim mahasiswa IT Del Prodi Informatika lolos sebagai Penerima Bantuan Program Pembinaan Mahasiswa Wirausaha. Tim tersebut terdiri dari ke-4 mahasiswa: 
                    </p>
                    <ol>
                        <li>Samuel Sibuea</li>
                        <li>Guntur Sinaga</li>
                        <li>Lamboy Sirait</li>
                        <li>Michael Napitupulu</li>
                    </ol>
                    <p>Judul Usaha "Manajemen Sumber Daya Tambak Toba".</p>
                    <p>
                        P2MW sendiri merupakan program pengembangan usaha mahasiswa yang telah memiliki usaha melalui bantuan dana pengembangan dan pembinaan dengan melakukan pendampingan serta pelatihan
                        (coaching) usaha kepada mahasiswa peserta P2MW. Kategori usaha yang ada terbagi atas 6 yaitu; makanan dan minuman,
                        produksi atau budidaya, industry kreatif, seni, budaya, dan pariwisata, jasa dan perdagangan, dan teknologi terapan.
                    </p>
                    <p>
                        Program ini ditujukan kepada perguruan tinggi untuk merancang proses pembinaan kewirausahaan yang berprinsip pada pengembangan karakter “Creative Technopreneur”. 
                        Kemendikbudristek masuk ke perguruan tinggi melihat bahwa Mahasiswa memiliki segudang ide-ide inovatif dan kreatif untuk wirausaha yang sayang jika tidak diberdayakan. 
                        Karena itu program ini hadir untuk memfasilitasi mahasiswa yang memiliki ide brilian di bidang wirausaha dengan mentoring dan pendanaan program usaha yang telah terpilih melalui proses seleksi.
                    </p>
                </div>
            </Container>
            </Container>
            <Footer/>
    </>
    );
}

export default Artikel1;