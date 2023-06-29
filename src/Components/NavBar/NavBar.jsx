import "./navbar.css";
import logo from "../../assets/images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/apiRequest";
import { Image, Nav, Dropdown, Button } from "react-bootstrap";

const NavBar = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut(dispatch, navigate);
  };
  return (
    <div id="navbar">
      <div className="py-3">
        <Image
          src={logo}
          style={{ width: "100%", maxHeight: "80px", maxWidth: "500px" }}
        />
      </div>
      <Nav variant="underline" defaultActiveKey="/">
        <Nav.Item>
          <Link to="/">TRANG CHỦ</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/gioi-thieu">GIỚI THIỆU</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/su-kien">SỰ KIỆN</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/co-hoi-giao-thuong">CƠ HỘI GIAO THƯƠNG</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/lien-he">LIÊN HỆ</Link>
        </Nav.Item>
        {user ? (
          <>
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="no-caret"
              >
                THÀNH VIÊN {user.username}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/thanh-vien" style={{ color: "#000" }}>
                    TRANG CÁ NHÂN
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/thanh-vien" style={{ color: "#000" }}>
                    TRANG THÀNH VIÊN CBA
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>ĐĂNG XUẤT</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        ) : (
          <>
            {" "}
            <Button variant="secondary">
              <Link to="register">Đăng ký thành viên CBA</Link>
            </Button>{" "}
          </>
        )}
      </Nav>
    </div>
  );
};

export default NavBar;
