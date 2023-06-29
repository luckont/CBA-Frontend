import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
// import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import imgLogo from "../../assets/images/logoCBA.jpg";
// import img from "../../assets/images/imgSlider.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";

const HomePage = () => {
  const [news, setNews] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("v1/news");
        setNews(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();

    const fecthUsers = async () => {
      try {
        const res = await axios.get("v1/user");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthUsers();
  }, []);
  const attenUsers = users.slice(0, 7);
  return (
    <main className="main-container">
      <Container className="top-container p-0">
        <Row className="w-100">
          <Col className="slider col-8">
            <Card>
              <Card.Img variant="top" src={imgLogo} height={300} />
              <Card.Body>
                <Card.Title>
                  <strong>NỘI DUNG NỔI BẬT</strong>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="new-right">
            <div className="title-context">TIN TỨC</div>
            <div className="list-news">
              {news.map((nws, index) => (
                <Card>
                  <Row key={index} className="m-0">
                    <Col className="col-4">
                      <Card.Img src={imgLogo} />
                    </Col>
                    <Col className="">
                      <Card.Title>{nws.newsTitle}</Card.Title>
                      <Card.Text>{nws.newsDescription}</Card.Text>
                    </Col>
                  </Row>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      <div className="attention-container">
        <div className="title-context">NỔI BẬT</div>
      </div>
      <Row className="card-atten mt-3">
        {news.map((item, index2) => (
          <Col key={index2} className="my-2">
            <Card style={{ width: "12rem" }}>
              <Card.Img variant="top" src={imgLogo} />
              <Card.Title>{item.newsTitle}</Card.Title>
              <Card.Text>{item.newsDescription}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="bussiness-container">
        <div className="title-context mt-3">DOANH NGHIỆP TIÊU BIỂU</div>
        <Row className="card-bussiness mt-3">
          {attenUsers.map((user) => (
            <Col key={user.id} className="text-center">
              <Image src={imgLogo} style={{ height: "10rem" }} />
              <br />
              {user.username}
            </Col>
          ))}
        </Row>
      </div>

      <div className="title-context my-3"></div>

    </main>
  );
};

export default HomePage;
