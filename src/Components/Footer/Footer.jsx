import { Row, Col, Image } from "react-bootstrap";
import logo from "../../assets/images/logo.jpg";

const Footer = () => {
  return (
    <Row style={{ backgroundColor: "#00A1DC", color: "white", margin: 0 }}>
      <Col>
        <Image
          src={logo}
          style={{ width: "100%", maxHeight: "80px", maxWidth: "500px" }}
        />
      </Col>
      <Col>
        <strong>
          ĐỊA CHỈ: 40 VÕ VĂN KIỆT, P. AN HÒA, Q. NINH KIỀU, CẦN THƠ <br />
          ĐIỆN THOẠI: 0292 3765 618 <br />
          EMAIL: contact@cbamekong.org
        </strong>
      </Col>
    </Row>
  );
};

export default Footer;
