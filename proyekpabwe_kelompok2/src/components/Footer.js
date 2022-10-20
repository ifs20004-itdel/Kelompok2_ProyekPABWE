//Tes footer


function Footer(){
    return(
            <>
    <div class=" text-light py-5 d-flex justify-content-center bg-primary ">
      <div class="footer-story col-md-4 mb-3 mx-5">
        <h5>Tentang Informatika</h5>
        <p class="mt-4">
          Program Studi S1 Teknik Informatika merupakan salah satu dari 4 program studi di bawah Fakultas Teknik 
          Informatika dan Elektro di Institut Teknologi Del.
        </p>
      </div>
      <div class="footer-hubungi-kami col-md-3 mb-3 mx-5 ">
        <h5>Hubungi Kami</h5>
        <div class="d-flex justify-content-start mt-4">
          <span class="material-icons me-3"> location_on </span>
          <p>Jl. P.I. Del, Sitoluama, Lagu Boti, Kabupaten Toba Samosir, Sumatera Utara</p>
        </div>
        <div class="d-flex justify-content-start">
          <span class="material-icons me-3"> email</span>
          <p>Informatika@del.ac.id</p>
        </div>
        <div class="d-flex justify-content-start">
          <span class="material-icons me-3"> call</span>
          <p>+6281263515500
          </p>
        </div>
      </div>
      <div class="footer-sosmed col-md-3 mb-3 ">
        <h5>Sosial Media</h5>
        <div class="icon-sosial-media d-flex mt-4">
          <a class="text-black" href="https://www.facebook.com/Institut.Teknologi.Del/" target="_blank"><i class="bx bxl-facebook-square me-3"></i></a>
          <a class="text-black" href="https://www.youtube.com/channel/UCi_VutHsvtyaJQ84s9xdSDg" target="_blank"> <i class="bx bxl-youtube me-3"></i> </a>
          <a class="text-black" href="https://www.instagram.com/it.del/?hl=id" target="_blank"><i class="bx bxl-instagram"></i> </a>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="d-flex justify-content-center align-items-center p-2"><span class="material-icons me-2 ms-2"> Copyright </span> 2022 Program Studi Informatika. All Rights Reserved.</div>
    </div>
            </>
    );
}

export default Footer;