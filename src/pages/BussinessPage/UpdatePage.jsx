import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/apiRequest";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const UpdatePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.login.currentUser);
  const userId = useSelector((state) => state.auth.login.currentUser._id);

  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState("");
  const [nameRepre, setNameRepre] = useState(
    currentUser.bussinessRepresentative.name
  );
  const [emailRepre, setEmailRepre] = useState(
    currentUser.bussinessRepresentative.email
  );
  const [phoneNumRepre, setPhoneNumlRepre] = useState(
    currentUser.bussinessRepresentative.phoneNumber
  );
  const [positionRepre, setPositionRepre] = useState(
    currentUser.bussinessRepresentative.position
  );
  const [bussinessName, setBussinessName] = useState(currentUser.bussinessName);
  const [bussinessIndustry, setBussinessIndustry] = useState(
    currentUser.bussinessIndustry
  );
  const [bussinessPhoneNumber, setBussinessPhoneNumber] = useState(
    currentUser.bussinessPhoneNumber
  );
  const [bussinessEmail, setBussinessEmail] = useState(
    currentUser.bussinessEmail
  );
  const [bussinessCreateTime, setBussinessCreateTime] = useState(
    currentUser.bussinessCreateTime
  );
  const [bussinessTaxID, setBussinessTaxID] = useState(
    currentUser.bussinessTaxID
  );
  const [bussinessAddress, setBussinessAddress] = useState(
    currentUser.bussinessAddress
  );
  const [CBAJoningTime, setCBAJoningTime] = useState(currentUser.CBAJoningTime);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
    setValidated(false);
    const userData = {
      username: username,
      password: password,
      email: email,
      bussinessRepresentative: {
        name: nameRepre,
        email: emailRepre,
        phoneNumber: phoneNumRepre,
        position: positionRepre,
      },
      bussinessName: bussinessName,
      bussinessIndustry: bussinessIndustry,
      bussinessPhoneNumber: bussinessPhoneNumber,
      bussinessEmail: bussinessEmail,
      bussinessCreateTime: bussinessCreateTime,
      bussinessTaxID: bussinessTaxID,
      bussinessAddress: {
        city: bussinessAddress.city,
        district: "Huyện",
      },
      CBAJoningTime: CBAJoningTime,
    };

    try {
      const response = await axios.put(`/v1/user/${userId}`, userData);
      logOut(dispatch, navigate);
      console.log("Cập nhật thành công");
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="w-100 my-2 align-items-center"
    >
      <Row className="w-100">
        <Col>
          <div className="title-context mb-4">THÔNG TIN TÀI KHOẢN</div>
          <Form.Group as={Col} md="6" controlId="validationCustom012">
            <Form.Label>Tên đăng nhập</Form.Label>
            <Form.Control
              style={{ width: "200%", margin: "0 0 0.75rem 0" }}
              type="text"
              value={username}
              placeholder="Tên đăng nhập"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập tên đăng nhập !
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom013">
            <Form.Label>Email đăng nhập</Form.Label>
            <Form.Control
              style={{ width: "200%", margin: "0 0 0.75rem 0" }}
              type="text"
              value={email}
              placeholder="Email đăng nhập"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập email đăng nhập !
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom014">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              style={{ width: "200%", margin: "0 0 0.75rem 0" }}
              type="password"
              placeholder="Mật khẩu"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập họ tên người đại diện !
            </Form.Control.Feedback>
          </Form.Group>
          <div className="title-context mb-4">ĐẠI DIỆN DOANH NGHIỆP</div>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Người đại diện</Form.Label>
            <Form.Control
              style={{ width: "200%", margin: "0 0 0.75rem 0" }}
              type="text"
              value={nameRepre}
              placeholder="Họ và tên"
              required
              onChange={(e) => setNameRepre(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập họ tên người đại diện !
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control
              style={{ width: "200%", margin: "0 0 0.75rem 0" }}
              type="email"
              value={emailRepre}
              placeholder="Email cá nhân"
              required
              onChange={(e) => setEmailRepre(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập email cá nhân !
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              style={{ width: "200%", margin: "0 0 0.75rem 0" }}
              type="text"
              value={phoneNumRepre}
              placeholder="Số điện thoại cá nhân"
              required
              onChange={(e) => setPhoneNumlRepre(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập số điện thoại cá nhân !
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Chức vụ</Form.Label>
            <Form.Control
              style={{ width: "200%", margin: "0 0 0.75rem 0" }}
              type="text"
              value={positionRepre}
              placeholder="Chức vụ"
              required
              onChange={(e) => setPositionRepre(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập chức vụ cá nhân !
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <div className="title-context mb-4">THÔNG TIN DOANH NGHIỆP</div>
          <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>Tên doanh nghiệp</Form.Label>
            <Form.Control
              style={{ width: "200%", margin: "0 0 0.75rem 0" }}
              type="text"
              value={bussinessName}
              placeholder="Tên doanh nghiệp"
              required
              onChange={(e) => setBussinessName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập tên doanh nghiệp !
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom06">
            <Form.Label>Ngành nghề kinh doanh</Form.Label>
            <Form.Control
              style={{ width: "200%", margin: "0 0 0.75rem 0" }}
              type="text"
              value={bussinessIndustry}
              placeholder="Ngành nghề kinh doanh"
              required
              onChange={(e) => setBussinessIndustry(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập nghành nghề kinh doanh !
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom07">
            <Form.Label>Số điện thoại doanh nghiệp</Form.Label>
            <Form.Control
              style={{ width: "200%", margin: "0 0 0.75rem 0" }}
              type="text"
              value={bussinessPhoneNumber}
              placeholder="Số điện thoại doanh nghiệp"
              required
              onChange={(e) => setBussinessPhoneNumber(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập số điện thoại doanh nghiệp !
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom019">
            <Form.Label>Email doanh nghiệp</Form.Label>
            <Form.Control
              style={{ width: "200%", margin: "0 0 0.75rem 0" }}
              type="email"
              value={bussinessEmail}
              placeholder="Email của doanh nghiệp"
              required
              onChange={(e) => setBussinessEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập email của doanh nghiệp !
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom08">
            <Form.Label>Thời gian thành lập</Form.Label>
            <Form.Control
              style={{ width: "200%", margin: "0 0 0.75rem 0" }}
              type="date"
              value={bussinessCreateTime}
              required
              onChange={(e) => setBussinessCreateTime(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập thời gian thành lập !
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom09">
            <Form.Label>Mã số thuế</Form.Label>
            <Form.Control
              style={{ width: "200%", margin: "0 0 0.75rem 0" }}
              type="text"
              value={bussinessTaxID}
              placeholder="Mã số thuế"
              required
              onChange={(e) => setBussinessTaxID(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập mã số thuế doanh nghiệp !
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom10">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control
              style={{ width: "200%", margin: "0 0 0.75rem 0" }}
              type="text"
              value={bussinessAddress.city}
              placeholder="Địa chỉ"
              required
              onChange={(e) => setBussinessAddress(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập địa chỉ doanh nghiệp !
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom11">
            <Form.Label>Thời gian gia nhập CBA</Form.Label>
            <Form.Control
              style={{ width: "200%", margin: "0 0 0.75rem 0" }}
              type="date"
              value={CBAJoningTime}
              required
              onChange={(e) => setCBAJoningTime(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập thời gian gia nhập CBA !
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Col className="w-25 ">
        <Row className="py-2">
          <Button variant="light" type="submit" style={{ border: "2px solid" }}>
            Cập nhật
          </Button>
        </Row>
        <Row>
          <Button variant="light" type="reset" style={{ border: "2px solid" }}>
            Đặt lại
          </Button>
        </Row>
      </Col>
    </Form>
  );
};

export default UpdatePage;
