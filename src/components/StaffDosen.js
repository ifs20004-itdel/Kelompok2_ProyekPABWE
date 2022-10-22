import img1 from '../Assets/plaza_ItDel.jpg'
import dosen1 from '../Assets/Pak_Arie.jpg'
import dosen2 from '../Assets/Bu_Ius.jpeg'
import dosen3 from '../Assets/Pak_Yaya.jpg'
import dosen4 from '../Assets/Pak_Johannes.jpeg'
import dosen5 from '../Assets/Bu_ACB.jpeg'
import dosen6 from '../Assets/Pak_Lit.jpeg'
import dosen7 from '../Assets/Pak_Anthon.jpeg'
import dosen8 from '../Assets/Bu_Nenni.jpeg'
import dosen9 from '../Assets/Pak_Tahan.jpeg'
import dosen10 from '../Assets/Pak_Heri.jpeg'
import staff1 from '../Assets/Abdullah.jpeg'
import staff2 from '../Assets/Aprialdy.jpeg'

import { Nav, Table } from 'react-bootstrap';

function StaffDosen(){
    return(
        <>
        <figure className='position-relative'>
            <img
                className=" w-100 fluid"
                src={img1}
                style={{ height: '350px', objectFit: 'cover' }}
                alt="Plaza IT Del" />
            <figcaption className='h1 text-light px-5 py-4 bg-dark bg-gradient bg-opacity-50 rounded-3'>
                DOSEN & STAFF
            </figcaption>
        </figure>
        <div className='container d-flex'>
            <div className='mt-5 sidebar'>
                    <Nav className=' bg-secondary bg-opacity-25 bg-gradient nav flex-column rounded-3 py-3 px-4 sidebar'>
                    <Nav.Link href="/visiMisi" className='text-dark py-3 txtHover'>Visi dan Misi</Nav.Link>
                    <Nav.Link href="/staffDosen" className='text-dark py-3 txtHover'>Dosen Staff</Nav.Link>
                    <Nav.Link href="/prestasi" className='text-dark py-3 txtHover'> Prestasi</Nav.Link>
                    <Nav.Link href="/kurikulum" className='text-dark py-3 txtHover'> Struktur Kurikulum</Nav.Link>
                    </Nav>
            </div>
            <div className='w-100'>
                <div className='px-5 mt-5 mb-4'>
                        <h1>DOSEN</h1>
                        <hr></hr>
                        <div className='d-flex mx-auto my-4'>
                            <div className='container w-50'>
                                <img className="w-auto"
                                src={dosen1}
                                style={{ height: '200px', width:"100px", objectFit: 'cover' }}
                                alt="Arie Satia Dharma"/>
                            </div>
                            <Table>
                                <thead>
                                    <tr className='h5'>
                                        <td colSpan={2}><b>Arie Satia Dharma, S.T, M.Kom</b></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jabatan :</td>
                                        <td>Ketua Program Studi Informatika</td>
                                    </tr>
                                    <tr>
                                        <td>NIDN:</td>
                                        <td>0927028002</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>ariesatia@del.ac.id</td>
                                    </tr>
                                    <tr>
                                        <td>Latar Belakang pendidikan:</td>
                                        <td>S1 Teknik Elektro Kristen Maranatha 
                                            <br></br>
                                        <td>S2 Teknik Informatika USU</td>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <hr></hr>
                        <div className='d-flex m-auto  my-4'>
                            <div className='container w-50'>
                                <img className="w-auto"
                                src={dosen2}
                                style={{ height: '200px', width:"100px", objectFit: 'cover' }}
                                alt="Iustitia Natalia Simbolon"/>
                            </div>
                            <Table>
                                <thead>
                                    <tr className='h5'>
                                        <td colSpan={2}><b>Iustisia Natalia Simbolon, S.Kom., M.T.</b></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jabatan :</td>
                                        <td>Ketua Gugus Kendali Mutus</td>
                                    </tr>
                                    <tr>
                                        <td>NIDN:</td>
                                        <td>0114129002</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>iustisia.simbolon@del.ac.id</td>
                                    </tr>
                                    <tr>
                                        <td>Latar Belakang pendidikan:</td>
                                        <td>
                                            Diploma Teknik Komputer Universitas Telkom
                                            <br></br>
                                            Bachelor Ilmu Komputer USU
                                            <br></br>
                                            S2 Informatika ITB
                                            </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <hr></hr>
                        <div className='d-flex m-auto  my-4'>
                            <div className='container w-50'>
                                <img className="w-auto"
                                src={dosen3}
                                style={{ height: '200px', width:"100px", objectFit: 'cover' }}
                                alt="Yaya Setiadi"/>
                            </div>

                            <Table>
                                <thead>
                                    <tr className='h5'>
                                        <td colSpan={2}><b>Yaya Setiadi, S.Si., M.T.</b></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jabatan :</td>
                                        <td>Dosen Prodi</td>
                                    </tr>
                                    <tr>
                                        <td>NIDN:</td>
                                        <td>0121097601</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>yaya@del.ac.id</td>
                                    </tr>
                                    <tr>
                                        <td>Latar Belakang pendidikan:</td>
                                        <td>S1 Matematika ITB
                                            <br></br>
                                            S2 Informatika ITB
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <hr></hr>
                        <div className='d-flex m-auto  my-4'>
                            <div className='container w-50'>
                                <img className="w-auto"
                                src={dosen4}
                                style={{ height: '200px', width:"100px", objectFit: 'cover' }}
                                alt="Johannes Harungguan"/>
                            </div>

                            <Table>
                                <thead>
                                    <tr className='h5'>
                                        <td colSpan={2}><b>Dr. Johannes Harungguan Sianipar, S.T., M.T</b></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jabatan :</td>
                                        <td>
                                            Wakil Rektor Bidang Akademik
                                            <br></br>
                                            Dosen Prodi
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>NIDN:</td>
                                        <td>0116047301</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>johannes@del.ac.id</td>
                                    </tr>
                                    <tr>
                                        <td>Latar Belakang pendidikan:</td>
                                        <td> S1 Teknik Elektro STT Telkom
                                            <br></br>
                                            S2 Teknik Informatika ITB
                                            <br></br>
                                            S3 System Engineering HPI University of Potsdam Germany
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <hr></hr>
                        <div className='d-flex m-auto  my-4'>
                            <div className='container w-50'>
                                <img className="w-auto"
                                src={dosen5}
                                style={{ height: '200px', width:"100px", objectFit: 'cover' }}
                                alt="Arlinta Christy Barus"/>
                            </div>

                            <Table>
                                <thead>
                                    <tr className='h5'>
                                        <td colSpan={2}><b>Dr. Arlinta Christy Barus, ST., M.InfoTech.</b></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jabatan :</td>
                                        <td>
                                            Lektor Kepala
                                            <br></br>
                                            Dosen Prodi
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>NIDN:</td>
                                        <td>0117027901</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>arlintacbarus@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Latar Belakang pendidikan:</td>
                                        <td>S1 Teknik Informatika ITB
                                            <br></br>
                                            S2 Information and Communication University of Wollongong, Australia
                                            <br></br>
                                            S3 Information and Communication Technology Swinburne University of Technology
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <hr></hr>
                        <div className='d-flex m-auto  my-4'>
                            <div className='container w-50'>
                                <img className="w-auto "
                                src={dosen6}
                                style={{ height: '200px', width:"100px", objectFit: 'cover' }}
                                alt="Lit Malem"/>
                            </div>

                            <Table>
                                <thead>
                                    <tr className='h5'>
                                        <td colSpan={2}><b>Lit Malem Ginting, S.Si, M.T.</b></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jabatan :</td>
                                        <td>Dosen Prodi</td>
                                    </tr>
                                    <tr>
                                        <td>NIDN:</td>
                                        <td>0118097802</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>litmalem.ginting@del.ac.id</td>
                                    </tr>
                                    <tr>
                                        <td>Latar Belakang pendidikan:</td>
                                        <td>S1 Fisika ITB
                                            <br></br>
                                            S2 Informatika ITB
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <hr></hr>
                        <div className='d-flex m-auto  my-4'>
                            <div className='container w-50'>
                                <img className="w-auto"
                                src={dosen7}
                                style={{ height: '200px', width:"100px", objectFit: 'cover' }}
                                alt="Anthon Roberto"/>
                            </div>
                            <Table>
                                <thead>
                                    <tr className='h5'>
                                        <td colSpan={2}><b>Anthon Roberto Tampubolon, S.Kom, M.T.</b></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jabatan :</td>
                                        <td>Dosen Prodi</td>
                                    </tr>
                                    <tr>
                                        <td>NIDN:</td>
                                        <td>0119098101</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>anthon.roberto@del.ac.id</td>
                                    </tr>
                                    <tr>
                                        <td>Latar Belakang pendidikan:</td>
                                        <td>S1 Teknik Informatika Stikom Uyelindo Kupang
                                            <br></br>
                                            S2 Teknologi Informasi ITB
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <hr></hr>
                        <div className='d-flex m-auto  my-4'>
                            <div className='container w-50'>
                                <img className="w-auto"
                                src={dosen8}
                                style={{ height: '200px', width:"100px", objectFit: 'cover' }}
                                alt="Nenni Mona"/>
                            </div>

                            <Table>
                                <thead>
                                    <tr className='h5'>
                                        <td colSpan={2}><b>Nenni Mona Aruan, S.Pd., M.Si</b></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jabatan :</td>
                                        <td>Dosen Prodi</td>
                                    </tr>
                                    <tr>
                                        <td>NIDN:</td>
                                        <td>0128109001</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>nenni.aruan@del.ac.id</td>
                                    </tr>
                                    <tr>
                                        <td>Latar Belakang pendidikan:</td>
                                        <td>S1 Pendidikan Fisika UPI Bandung
                                            <br></br>
                                            S2 Fisika ITB
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <hr></hr>
                        <div className='d-flex m-auto  my-4'>
                            <div className='container w-50'>
                                <img className="w-auto"
                                src={dosen9}
                                style={{ height: '200px', width:"100px", objectFit: 'cover' }}
                                alt="Tahan Sihombing"/>
                            </div>

                            <Table>
                                <thead>
                                    <tr className='h5'>
                                        <td colSpan={2}><b>Tahan HJ Sihombing, S.Pd., M. App Ling (TESOL)</b></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jabatan :</td>
                                        <td>Dosen Prodi</td>
                                    </tr>
                                    <tr>
                                        <td>NIDN:</td>
                                        <td>0102069002</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>tahan.sihombing@del.ac.id</td>
                                    </tr>
                                    <tr>
                                        <td>Latar Belakang pendidikan:</td>
                                        <td>Bachelor of Education The University of Mataram
                                            <br></br>
                                            Master of Applied Linguistics The University of Queensland, Australia
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <hr></hr>
                        <div className='d-flex m-auto  my-4'>
                            <div className='container w-50'>
                                <img className="w-auto"
                                src={dosen10}
                                style={{ height: '200px', width:"100px", objectFit: 'cover' }}
                                alt="Herimanto"/>
                            </div>

                            <Table>
                                <thead>
                                    <tr className='h5'>
                                        <td colSpan={2}><b>Herimanto, S.Kom., M.Kom</b></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jabatan :</td>
                                        <td>Dosen Prodi</td>
                                    </tr>
                                    <tr>
                                        <td>NIDN:</td>
                                        <td>_</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>@del.ac.id</td>
                                    </tr>
                                    <tr>
                                        <td>Latar Belakang pendidikan:</td>
                                        <td>
                                            S1 Ilmu Komputer USU
                                            <br></br>
                                            S2 Teknik Informatika USU
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                </div>
                <div className='px-5 mt-5 mb-4'>
                    <h1>STAFF</h1>
                    <hr></hr>
                    <div className='d-flex mx-auto my-4'>
                            <div className='container w-50'>
                                <img className="w-auto"
                                src={staff1}
                                style={{ height: '200px', width:"100px", objectFit: 'cover' }}
                                alt="Abdullah Ubaid"/>
                            </div>
                            <Table>
                                <thead>
                                    <tr className='h5'>
                                        <td colSpan={2}><b>Abdullah Ubaid, S.T</b></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tempat/Tanggal Lahir:</td>
                                        <td>P.Kerinci, 6 September 1999</td>
                                    </tr>
                                    <tr>
                                        <td>NIM:</td>
                                        <td>11S18005</td>
                                    </tr>
                                    <tr>
                                        <td>Lokasi Kerja Praktek:</td>
                                        <td>PT. Teknologi Jangkau Negeri</td>
                                    </tr>
                                    <tr>
                                        <td>Judul KP:</td>
                                        <td>Pembuatan Web Kount untuk Mengelola Kinerja Karyawan dan Mencapai Target Bisnis</td>
                                    </tr>
                                    <tr>
                                        <td>Judul TA:</td>
                                        <td>Implementasi Aplikasi Proctoring DelProctor dengan Menggunakan OpenCV
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                    </div>
                    <div className='d-flex mx-auto my-4'>
                            <div className='container w-50'>
                                <img className="w-auto"
                                src={staff2}
                                style={{ height: '200px', width:"100px", objectFit: 'cover' }}
                                alt="Aprialdy"/>
                            </div>
                            <Table>
                                <thead>
                                    <tr className='h5'>
                                        <td colSpan={2}><b>Aprialdy Sembiring, S.T.</b></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tempat/Tanggal Lahir:</td>
                                        <td>Pematang Siantar, 4 April 2000</td>
                                    </tr>
                                    <tr>
                                        <td>NIM:</td>
                                        <td>11S18024</td>
                                    </tr>
                                    <tr>
                                        <td>Lokasi Kerja Praktek:</td>
                                        <td>PT Sanjaya Tekno Pratama</td>
                                    </tr>
                                    <tr>
                                        <td>Judul KP:</td>
                                        <td>Aplikasi Website Senior Bakara Hotel</td>
                                    </tr>
                                    <tr>
                                        <td>Judul TA:</td>
                                        <td>Pengujian Fungsionalitas Website DiTenun menggunakan Automation Testing Tool
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                    </div>
                </div>
            </div>
        </div></>     
    );

}

export default StaffDosen;