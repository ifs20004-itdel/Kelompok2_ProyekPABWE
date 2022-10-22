import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import img1 from '../Assets/header.jpg'
import img2 from '../Assets/itdel_2022.jpg'
import img3 from '../Assets/art3_1.jpg'
import img4 from '../Assets/art3_2.jpg'
import Footer from './Footer'
function Artikel3(){
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
                <Nav.Link href="/artikel2" className='text-dark txtHover'>FITE E-Sport</Nav.Link>
            </Nav>
        </div>
        <Container className='mt-2 mb-5 bg-light bg-opacity-25 rounded-4 border border-secondary'>
            <h2 className='text-center pt-4'>
                Pengukuhan Mahasiswa IT Del Angkatan 2022
            </h2>
            <div className='text-center p-5'>
                <Image 
                    className=" w-50 fluid "
                    src={img2}
                    style={{ objectFit: 'cover' }}
                    alt="Plaza IT Del"
                >
                </Image>
            </div>
            <div className='w-75 m-auto pb-4'>
                <p>
                    Pada hari Sabtu 3 September 2022, 426 Mahasiswa Institut Teknologi Del resmi dikukuhkan pada Kegiatan Inaugurasi dan Dies  Natalis bertempat di Gedung Serba Guna Yayasan Del. 
                    Kegiatan ini dihadiri oleh Bapak Jenderal TNI (Purn.) Luhut Binsar Pandjaitan, M.P.A. dan Ibu Devi Pandjaitan (Pembina Yayasan Del), 
                    Ibu Intan Simanjuntak (Ketua Pengurus Yayasan Del), Bapak TNI (Purn.) Hinsa Siburian (Kepala Badan Siber dan Sandi Negara), Mr. Jacky Chen (President of Huawei), Bapak Ir. Poltak Sitorus (Bupati Kabupaten Toba),
                    Mr. Tan Sri Tony Fernandes (CEO of Capital A) besera Ibu Veranita Sinaga (CEO of Indonesia Airasia), bersama tamu undangan lainnya.
                </p>
                <div className='d-flex py-3'>
                    <img 
                        className=" w-50 fluid me-4"
                        src={img3}
                        style={{ objectFit: 'cover' }}
                        alt="ak2020" />
                    <img 
                        className=" w-50 fluid ms-4"
                        src={img4}
                        style={{ objectFit: 'cover' }}
                        alt="ak2020" />
                </div>
                <p>
                    Dalam Kegiatan ini Mahasiswa Baru IT Del dikukuhkan dengan mengucapkan “Janji Mahasiswa”. 
                    Dalam kegiatan ini pula Bapak Luhut Binsar Pandjaitan berpesan kepada Mahasiswa Baru untuk giat belajar dan tetap berbuat baik. 
                    “Untuk mahasiswa tetaplah giat belajar dan berbuat baik hingga nanti lulus menjadi alumni yang berkarakter dan berinovasi, karena kalian sangat dibutuhkan di masa depan Indonesia”. Ujar beliau.
                </p>
                <p>
                    Melalui Laporan Panitia Penerimaan Mahasiswa Baru oleh Bapak Johannes Harungguan Sianipar (Rektor I Bidang Akademik dan Kemahasiswaan IT Del) 
                    bahwa 426 mahasiswa baru terdiri dari 62 orang prodi D3 Teknologi Informasi, 63 orang untuk D3 Teknologi Komputer, 61 orang untuk D4 Teknologi Rekayasa Perangkat Lunak, 51 orang untuk S1 Informatika, 
                    62 orang untuk S1 Manajemen Rekayasa, 52 orang untuk S1 Sistem Informasi, 28 untuk S1 Teknik Bioproses, dan 46 untuk S1 Teknik Elektro.
                </p>
                <p>Bapak Arnaldo Sinaga dalam sambutannya berpesan kepada mahasiswa IT Del untuk menjaga karakter 3M (MarTuhan, Marroha, Marbisuk), rajin belajar dan mengikuti program-program yang baik. 
                    Selain itu Beliau juga menyampaikan agar mahasiswa disiplin, mandiri, bertanggungjawab, berwawasan luas khususnya dibidang teknologi dan berkontribusi dalam pengembangan inovasi.</p>
                <p>
                    Setelah kegiatan Inaugurasi, dilakukan pula perayaan Dies Natalis Institut Teknologi Del ke XXI. 
                    Seluruh Pimpinan Yayasan, Senat Akademik, Orang tua mahasiswa, tamu dan undangan serta Sivitas Akademika IT Del turut berbahagia dalam memeriahkan perayaan ini yang dilengkapi dengan pemotongan tumpeng.
                    SELAMAT ULANG TAHUN INSTITUT TEKNOLOGI DEL.
                </p>
            </div>
        </Container>
        </Container>
        <Footer/>
</>
    );
}

export default Artikel3;