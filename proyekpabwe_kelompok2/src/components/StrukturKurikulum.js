import Table from 'react-bootstrap/Table';
import Footer from './Footer'
import {  Nav } from 'react-bootstrap';

function Kurikulum() {
  return (
    <>
      <div
        className="py-3 px-5 text-center w-auto"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <h3 className="w-100 h2">Struktur Kurikulum Program Studi Informatika Program Sarjana</h3>
      </div>
      <br></br>
      <div className='container d-flex'>
        <div className='mt-5 sidebar'>
                <Nav className=' bg-secondary bg-opacity-25 bg-gradient nav flex-column rounded-3 py-3 px-4 sidebar'>
                  <Nav.Link href="/visiMisi" className='text-dark py-3 txtHover'>Visi dan Misi</Nav.Link>
                  <Nav.Link href="/staffDosen" className='text-dark py-3 txtHover'>Staff Dosen </Nav.Link>
                  <Nav.Link href="/prestasi" className='text-dark py-3 txtHover'> Prestasi</Nav.Link>
                  <Nav.Link href="/kurikulum" className='text-dark py-3 txtHover'> Struktur Kurikulum</Nav.Link>
                </Nav>
        </div>
        <Table className='w-75 m-auto my-5' striped bordered hover>
          <thead>
            <tr className='h5'><b>Semester 1</b></tr> <br></br>
            <tr>
              <th>No</th>
              <th>Kode</th>
              <th>Nama Mata Kuliah</th>
              <th>SKS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>KUS1102</td>
              <td>Pembentukan Karakter Del</td>
              <td>2</td>
            </tr>
            <tr>
              <td>2</td>
              <td>FIS1102</td>
              <td>Fisika Dasar IB</td>
              <td>3</td>
            </tr>
            <tr>
              <td>3</td>
              <td>MAS1101</td>
              <td>Matematika Dasar I</td>
              <td>4</td>
            </tr>
            <tr>
              <td>4</td>
              <td>KUS1101</td>
              <td>Bahasa Inggris I</td>
              <td>2</td>
            </tr>
            <tr>
              <td>5</td>
              <td>KUS1001</td>
              <td>Penulisan Karya Ilmiah</td>
              <td>2</td>
            </tr>
            <tr>
              <td>6</td>
              <td>10S1101</td>
              <td>Matematika Diskrit</td>
              <td>3</td>
            </tr>
          </tbody>
          <br></br>

          <thead>
            <tr className='h5'><b>Semester 2</b></tr><br></br>
            <tr>
              <th>No</th>
              <th>Kode</th>
              <th>Nama Mata Kuliah</th>
              <th>SKS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>KUS1202</td>
              <td>Pengatar Rekayasa dan Desain</td>
              <td>2</td>
            </tr>
            <tr>
              <td>2</td>
              <td>11S1213</td>
              <td>Rekayasa Perangkat Lunak</td>
              <td>3</td>
            </tr>
            <tr>
              <td>3</td>
              <td>10S1202</td>
              <td>Dasar Pemrograman</td>
              <td>4</td>
            </tr>
            <tr>
              <td>4</td>
              <td>MAS1201</td>
              <td>Matematika Dasar II</td>
              <td>4</td>
            </tr>
            <tr>
              <td>5</td>
              <td>FIS1202</td>
              <td>Fisika Dasar IIB</td>
              <td>3</td>
            </tr>
            <tr>
              <td>6</td>
              <td>KUS1201</td>
              <td>Bahasa Inggris II</td>
              <td>2</td>
            </tr>
          </tbody>
          <br></br>

          <thead>
            <tr className='h5'><b>Semester 3</b></tr> <br></br>
            <tr>
              <th>No</th>
              <th>Kode</th>
              <th>Nama Mata Kuliah</th>
              <th>SKS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>TE</td>
              <td>Sistem Digital</td>
              <td>3</td>
            </tr>
            <tr>
              <td>2</td>
              <td>12S2102</td>
              <td>Basis Data</td>
              <td>4</td>
            </tr>
            <tr>
              <td>3</td>
              <td>10S2103</td>
              <td>Arsitektur dan Organisasi Komputer</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>11S2110</td>
              <td>Pemrograman Berorientasi Objek</td>
              <td>4</td>
            </tr>
            <tr>
              <td>5</td>
              <td>KUS3002</td>
              <td>Agama dan Etika</td>
              <td>2</td>
            </tr>
            <tr>
              <td>6</td>
              <td>10S2106</td>
              <td>Probabilitas dan Statistik</td>
              <td>3</td>
            </tr>
          </tbody>
          <br></br>
          
          <thead>
            <tr className='h5'><b>Semester 4</b></tr> <br></br>
            <tr>
              <th>No</th>
              <th>Kode</th>
              <th>Nama Mata Kuliah</th>
              <th>SKS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>11S2203</td>
              <td>Interaksi Manusia Komputer</td>
              <td>3</td>
            </tr>
            <tr>
              <td>2</td>
              <td>11S2206</td>
              <td>Logika Informatika</td>
              <td>3</td>
            </tr>
            <tr>
              <td>3</td>
              <td>10S2204</td>
              <td>Algoritma dan Struktur Data</td>
              <td>4</td>
            </tr>
            <tr>
              <td>4</td>
              <td>10S2207</td>
              <td>Sistem Operasi</td>
              <td>3</td>
            </tr>
            <tr>
              <td>5</td>
              <td>10S2208</td>
              <td>Jaringan Komputer</td>
              <td>3</td>
            </tr>
            <tr>
              <td>6</td>
              <td>10S2205</td>
              <td>Aljabar Linear</td>
              <td>3</td>
            </tr>
          </tbody>
          <br></br>

          <thead>
            <tr className='h5'><b>Semester 5</b></tr><br></br>
            <tr>
              <th>No</th>
              <th>Kode</th>
              <th>Nama Mata Kuliah</th>
              <th>SKS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>11S3109</td>
              <td>Pengembangan Aplikasi Berbasis Web</td>
              <td>4</td>
            </tr>
            <tr>
              <td>2</td>
              <td>11S3101</td>
              <td>Analisis dan Perancangan Perangkat Lunak</td>
              <td>3</td>
            </tr>
            <tr>
              <td>3</td>
              <td>10S3109</td>
              <td>Kecerdasan Buatan</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>11S3116</td>
              <td>Teori Bahasa Formal dan Automata</td>
              <td>3</td>
            </tr>
            <tr>
              <td>5</td>
              <td>11S3112</td>
              <td>Pengujian dan Penjaminan Mutu Perangkat Lunak</td>
              <td>3</td>
            </tr>
            <tr>
              <td>6</td>
              <td>11S3105</td>
              <td>Kriptografi dan Keamanan Informasi</td>
              <td>3</td>
            </tr>
          </tbody>
          <br></br>

          <thead>
            <tr className='h5'><b>Semester 6</b></tr> <br></br>
            <tr>
              <th>No</th>
              <th>Kode</th>
              <th>Nama Mata Kuliah</th>
              <th>SKS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>11S3211</td>
              <td>Pengembangan Aplikasi Mobile</td>
              <td>4</td>
            </tr>
            <tr>
              <td>2</td>
              <td>11S3207</td>
              <td>Pembelajaran Mesin</td>
              <td>3</td>
            </tr>
            <tr>
              <td>3</td>
              <td>11S3208</td>
              <td>Manajemen Proyek Perangkat Lunak</td>
              <td>4</td>
            </tr>
            <tr>
              <td>4</td>
              <td>11S3204</td>
              <td>Keamanan Perangkat Lunak</td>
              <td>3</td>
            </tr>
            <tr>
              <td>5</td>
              <td>KUS2001</td>
              <td>Bahasa Inggris III</td>
              <td>2</td>
            </tr>
            <tr>
              <td>6</td>
              <td>13S3215</td>
              <td>Sistem Paralel dan Terdistribusi</td>
              <td>3</td>
            </tr>
          </tbody>
          <br></br>

          <thead>
            <tr className='h5'><b>Semester 7</b></tr><br></br>
            <tr>
              <th>No</th>
              <th>Kode</th>
              <th>Nama Mata Kuliah</th>
              <th>SKS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>11S4190</td>
              <td>Kerja Praktik</td>
              <td>3</td>
            </tr>
            <tr>
              <td>2</td>
              <td>11S4093</td>
              <td>Tugas Akhir I</td>
              <td>4</td>
            </tr>
            <tr>
              <td>3</td>
              <td>-</td>
              <td>Pilihan Dalam Prodi</td>
              <td>9</td>
            </tr>

          </tbody>
          <br></br>

          <thead>
            <tr className='h5'><b>Semester 8</b></tr><br></br>
            <tr>
              <th>No</th>
              <th>Kode</th>
              <th>Nama Mata Kuliah</th>
              <th>SKS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>11S4094</td>
              <td>Tugas Akhir 2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>2</td>
              <td>TIS3001</td>
              <td>Keteknowiraan</td>
              <td>3</td>
            </tr>
            <tr>
              <td>3</td>
              <td>KUS3001</td>
              <td>Analisis Dampak Lingkungan</td>
              <td>2</td>
            </tr>
            <tr>
              <td>4</td>
              <td>KUS4101</td>
              <td>Pancasila dan Kewarganegaraan</td>
              <td>2</td>
            </tr>
            <tr>
              <td>5</td>
              <td>11S4095</td>
              <td>Kapita Selekta</td>
              <td>1</td>
            </tr>
            <tr>
              <td>6</td>
              <td>-</td>
              <td>Pilihan Dalam/Luar Prodi</td>
              <td>6</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Footer /></> 
  );
}

export default Kurikulum;