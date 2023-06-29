import axios from "axios";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/logoCBA.jpg";
import "./BussinessPage.css";

const BussinessPage = () => {
  const currentUser = useSelector((state) => state.auth.login?.currentUser);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`/v1/event/${currentUser._id}`);
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  });

  return (
    <Container className="pt-4">
      <Row>
        <Col xs={12} md={4} className="avatar-container">
          <Image src={avatar} roundedCircle fluid className="avatar-img" />
          <div className="avatar-buttons">
            <button className="btn-view mb-2">Xem ảnh</button>
            <button className="btn-update">Cập nhật ảnh</button>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <h2 style={{ fontWeight: 800 }}>{currentUser.bussinessName}</h2>
          <p>
            Mr/Mrs <strong>{currentUser.bussinessRepresentative.name}</strong>
          </p>
          <p>
            <strong>{currentUser.bussinessRepresentative.position}</strong>
          </p>
          <p>
            SDT:
            <strong>{currentUser.bussinessRepresentative.phoneNumber}</strong>
          </p>
          <p>
            Email:<strong>{currentUser.bussinessRepresentative.email}</strong>
          </p>
          <p>
            Address:
            <strong>
              {currentUser.bussinessAddress.district} -{" "}
              {currentUser.bussinessAddress.city}
            </strong>
          </p>
          <strong style={{ color: "#2E3192" }}>
            {" "}
            Là thành viên CBA từ {currentUser.CBAJoningTime}
          </strong>
          <br /> <br />
          <Link
            to={{
              pathname: "/cap-nhat-thanh-vien",
              state: { idUser: currentUser._id },
            }}
          >
            {" "}
            <Button variant="light" style={{ border: "2px solid #00A1DC" }}>
              Cập nhật thông tin
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="title-context">THÔNG TIN CHI TIẾT</div>
          <p className="pt-2" style={{ fontWeight: "bold", color: "#2E3192" }}>
            - Ngày thành lập
          </p>
          <strong>{currentUser.bussinessCreateTime}</strong>
          <p className="pt-2" style={{ fontWeight: "bold", color: "#2E3192" }}>
            - Lĩnh vực kinh doanh
          </p>
          <strong>{currentUser.bussinessIndustry}</strong>
          <p className="pt-2" style={{ fontWeight: "bold", color: "#2E3192" }}>
            - Thông tin doanh nghiệp
          </p>
          <p>
            SDT Doanh nghiệp:
            <strong> {currentUser.bussinessPhoneNumber}</strong>
          </p>
          <p>
            Email:<strong> {currentUser.bussinessEmail}</strong>
          </p>
          <p>
            Mã số thuế:<strong> {currentUser.bussinessTaxID}</strong>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="title-context">SỰ KIỆN</div>

          {posts.length === 0 ? (
            <h5>Không có sự kiện nào.</h5>
          ) : (
            posts.map((post) => (
              <div key={post.id}>
                <h2>{post.eventDescription}</h2>
                <p>{post.idBussiness}</p>
              </div>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default BussinessPage;
