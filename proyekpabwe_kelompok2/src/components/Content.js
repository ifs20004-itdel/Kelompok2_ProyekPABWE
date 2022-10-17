import kaprodi from "../Assets/Pak_Arie.jpg";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import coba from "../Assets/coba.jpg";
import coba1 from "../Assets/coba1.jpg";
import coba2 from "../Assets/coba2.jpg";
import { } from "react-bootstrap-icons";
import "./Style.css";

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

function content() {
  return (
    <>
      <div>
        <ColoredLine color="red"></ColoredLine>
      </div>
      <div
        data-aos="fade-right"
        className="container py-5 px-5 d-flex rounded-3"
        style={{ backgroundColor: "gainsboro" }}
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
        style={{ backgroundColor: "gainsboro" }}
      >
        <h3 className="w-100">Event Terkini</h3>
        <a className="w-100 position text-end">Lihat lebih banyak</a>
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
              pengembangan usaha mahasiswa yang telah memiliki usaha melalui
              batuan dana pengembangan ...
            </Card.Text>
            <Button variant="primary">Lihat Selengkapnya</Button>
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
              para mahasiswa FITE. Beragam permainan E-Sport yang diperlombakan
              seperti Mobile Legend, Free Fire, ...
            </Card.Text>
            <Button variant="primary">Lihat Selengkapnya</Button>
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
              bertempat di Gedung Serba Guna Yayasan Del. Kegiatan ini dihadiri
              oleh Bapak Jenderal...
            </Card.Text>
            <Button variant="primary">Lihat Selengkapnya</Button>
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
              {/* <Form.Text className="text-muted" style={{fontSize:"12px",paddingLeft:"10px"}}>
                            We'll never share your email with anyone else.
                        </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Pesan</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card></Card>
      </CardGroup>
    </>
  );
}

export default content;
