import kaprodi from "../Assets/Pak_Arie.jpg";
import coba from "../Assets/coba.jpg";
import coba1 from "../Assets/coba1.jpg";
import coba2 from "../Assets/coba2.jpg";
import dosen1 from "../Assets/Pak_Yaya.jpg";
import dosen2 from "../Assets/Pak_Anthon.jpeg";
import dosen3 from "../Assets/Bu_Nenni.jpeg";
import dosen4 from "../Assets/Bu_ACB.jpeg";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";
import { Mortarboard, People, JournalBookmark,EmojiLaughing } from "react-bootstrap-icons";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import "./Style.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ColoredLine = ({ color }) => (
  <hr
    style={{
      opacity: 0.5,
      backgroundColor: color,
      height: 1,
      width: "90%",
      margin: "20px auto",
    }}
  />
);

const onScroll = () => (
  ({ countUpRef, start }) => (
    <VisibilitySensor onChange={start} delayedCall>
        <span ref={countUpRef} />
    </VisibilitySensor>
  )
)



function content() {
  return (
    <>
      <div>
        <ColoredLine color="red"></ColoredLine>
      </div>
      <div
        data-aos="fade-right"
        className="container py-5 px-5 d-flex rounded-3"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <img
          src={kaprodi}
          alt="Arie Satia Darma"
          width="210"
          height="210"
          class="d-inline-block rounded-4"
        ></img>
        <div className="px-5">
          <p className="border border-light shadow-lg p-3 mb-5 bg-body p-3 rounded-3">
            "The discipline of International Relations has now encompassed
            issues that are interdisciplinary in nature. Therefore, we need to
            capitalize on this development for the advantage of future
            generations who will carry the responsibility over Indonesias
            resilience, development, and participation in the realization of
            world peace based on freedom, perpetual peace and social justice."
            <br></br>
            <br></br>
            <p>
              <b>Arie Satia Dharma, M.T</b>
            </p>
          </p>
          <p className="px-2">
            Kepala Program Studi Sarjana Informatika, <br></br> Dosen Mahasiswa
            Informatika
          </p>
        </div>
      </div>
      <div>
        <ColoredLine color="red"></ColoredLine>
      </div>
      <div
        data-aos="fade-up w-100"
        className="container py-3 px-5 d-flex rounded-2"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <h3 className="w-100 h2">Event Terkini</h3>
        <a className="w-100 position text-end" href="/kegiatan">Selengkapnya</a>
      </div>
        <CardGroup className="container py-3">
          <Card
            data-aos="flip-left"
            data-aos-duration="1500"
            style={{ width: "18rem" }}
            className="rounded-3 kartu mx-2"
          >
            <div className="overflow-hidden">
            <Card.Img variant="top" src={coba} className="card-img rounded-3" />
            </div>
            <Card.Body>
              <Card.Title>
                Program Pembinaan Mahasiswa Wirausaha (P2MW)
              </Card.Title>
              <Card.Text>
                Program Pembinaan Mahasiswa Wirausaga (P2MW) merupakan program
                pengembangan usaha mahasiswa yang telah memiliki ...
              </Card.Text>
              <Button href="/artikel1" variant="primary">Lihat Selengkapnya</Button>
            </Card.Body>
          </Card>
          <Card
            data-aos="flip-left"
            data-aos-duration="1500"
            style={{ width: "18rem" }}
            className="rounded-3 kartu mx-2" 
          >
            <div className="overflow-hidden">
              <Card.Img variant="top" src={coba1} className="card-img rounded-3" />
            </div>
            <Card.Body>
              <Card.Title>FITE E-SPORT</Card.Title>
              <Card.Text>
                Dalam memperingati se-windu Fakultas Informatika dan Teknik
                Elektro (FITE), FITE melakukan perlombaan E-Sport yang melibatkan
                para mahasiswa FITE. Beragam permainan ...
              </Card.Text>
              <Button href="/artikel2" variant="primary">Lihat Selengkapnya</Button>
            </Card.Body>
          </Card>
          <Card
            data-aos="flip-left"
            data-aos-duration="1500"
            style={{ width: "18rem" }}
            className="rounded-3 kartu mx-2"
          >
            <div className="overflow-hidden">
              <Card.Img variant="top" src={coba2} className="card-img rounded-3" />
            </div> 
            <Card.Body>
              <Card.Title>Pengukuhan Mahasiswa IT Del Angkatan 2022</Card.Title>
              <Card.Text>
                Pada hari Sabtu 3 September 2022, 426 Mahasiswa Institut Teknologi
                Del resmi dikukuhkan pada Kegiatan Inaugurasi dan Dies Natalis
                bertempat ...
              </Card.Text>
              <Button href="/artikel3" variant="primary">Lihat Selengkapnya</Button>
            </Card.Body>
          </Card>
          <Card
            data-aos="flip-left"
            data-aos-duration="1500"
            className=" container rounded-3 kartu" 
          >
            <Form className="p-3">
              <h4 className="text-center py-2">Feedback</h4>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan nama"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Alamat Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Masukkan email"
                  autoComplete="off"
                />

              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPesan">
                <Form.Label>Pesan</Form.Label>
                <Form.Control as="textarea" rows={3} 
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={
                (e) => {
                  e.preventDefault();
                  // Ambil data nama dari form
                  const nama = document.getElementById("formBasicName").value;
                  const email = document.getElementById("formBasicEmail").value;
                  const pesan = document.getElementById("formBasicPesan").value;
                  document.getElementById("card1Title").innerHTML = nama;
                  document.getElementById("card1Email").innerHTML = email;
                  document.getElementById("card1Text").innerHTML = pesan;
                  //Kosongkan data
                  document.getElementById("formBasicName").value = "";
                  document.getElementById("formBasicEmail").value = "";
                  document.getElementById("formBasicPesan").value = "";
                }
              }>
                Submit
              </Button>
            </Form>
          </Card>
        </CardGroup>
        <CardGroup className="container my-5">
          <Card className="p-3 scaling border-0 d-flex flex-row ">
            <Mortarboard size={80} color={"royalblue"} className={"m-auto"}></Mortarboard>
            <Card.Body>
              <Card.Title>Mahasiswa</Card.Title>
              <Card.Text className="h2" >
                  <CountUp isCounting end={1020} duration={2}>
                  {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-3 scaling border-0 d-flex flex-row">
            <People size={80} color={"royalblue"} className={"m-auto"}></People>
              <Card.Body>
                <Card.Title>Dosen & Staff</Card.Title>
                <Card.Text className="h2">
                  <CountUp isCounting end={12} duration={2}>
                  {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>

                </Card.Text>
              </Card.Body> 
          </Card>
          <Card className="p-3 scaling border-0 d-flex flex-row">
            <JournalBookmark size={75} color={"royalblue"} className={"m-auto"}></JournalBookmark>
            <Card.Body>
                <Card.Title>Publikasi</Card.Title>
                <Card.Text className="h2">
                  <CountUp isCounting end={141} duration={2}>
                  {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </Card.Text>
            </Card.Body> 
          </Card>
          <Card className="p-3 scaling border-0 d-flex flex-row">
            <EmojiLaughing size={75} color={"royalblue"} className={"m-auto"}></EmojiLaughing>
            <Card.Body>
                <Card.Title>Kepuasan Layanan</Card.Title>
                <Card.Text className="h2">
                  <CountUp isCounting end={90} duration={2} suffix="%">
                      {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </Card.Text>
            </Card.Body> 
          </Card>
        </CardGroup>
        
      <div
        data-aos="fade-up w-100"
        className="container py-3 text-center "           
      >
        <hr></hr>
        <h3 className="w-100 h2">Dosen</h3>
        <CardGroup className="container my-3">
        <Card className="p-3 scaling border-0 d-flex flex-column ">
          <Image src={dosen1} className="rounded-circle" style={{width: "100px", height: "100px", alignSelf:"center"}}></Image>
          <Card.Body>
            <Card.Title className=" text-primary">Yaya Setiadi, S.Si., MT</Card.Title>
          </Card.Body>
        </Card>
        <Card className="p-3 scaling border-0 d-flex flex-column ">
          <Image src={dosen2} className="rounded-circle" style={{width: "100px", height: "100px", alignSelf:"center"}}></Image>
          <Card.Body>
            <Card.Title className=" text-primary">Anthon Roberto Tampubolon, S.Kom, M.T.</Card.Title>
          </Card.Body>
        </Card>
        <Card className="p-3 scaling border-0 d-flex flex-column ">
          <Image src={dosen3} className="rounded-circle" style={{width: "100px", height: "100px", alignSelf:"center"}}></Image>
          <Card.Body>
            <Card.Title className=" text-primary">Nenni Mona Aruan, S.Pd., M.Si</Card.Title>
          </Card.Body>
        </Card>
        <Card className="p-3 scaling border-0 d-flex flex-column ">
          <Image src={dosen4} className="rounded-circle" style={{width: "100px", height: "100px", alignSelf:"center"}}></Image>
          <Card.Body>
            <Card.Title className=" text-primary">Dr. Arlinta Christy Barus, ST., M.InfoTech.</Card.Title>
          </Card.Body>
        </Card>
        </CardGroup>
        <Button className="text-center" href="/staffDosen">Baca Selengkapnya</Button>
      </div>
      <div
        data-aos="fade-up w-100"
        className="container py-3 text-center "           
      >
        <hr></hr>
        <h3 className="w-100 h2 mt-3">Feedback</h3>
        <div className="container bg-secondary bg-opacity-25 p-4 m-4 rounded-3">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
        <SwiperSlide>
          <Card className="text-center">
            <Card.Body>
              <Card.Title id="card1Title">Card title</Card.Title>
              <Card.Text id="card1Text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>
                <small className="text-muted" id = "card1Email">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default content;
