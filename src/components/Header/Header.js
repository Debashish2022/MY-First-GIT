import {
  Container,
  Form,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import "./Header.css";
import logo from "../../asset/novalogo.png";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../Redux/Actions";

export default function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    if (window.confirm("Are You Sure, You Want To Log Out")) {
      dispatch(signout());
      navigate("/");
    } else {
    }
  };
  return (
    <>
      {/* navbar2 */}
      <Navbar id="header1">
        <Container fluid id="header5">
          <Navbar.Brand>
            {/* <Link to="/"> */}
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-center"
              alt="Nova logo"
              id="header6"
            />
            {/* </Link> */}
          </Navbar.Brand>
          {/* <Navbar.Collapse className="justify-content-end"> */}
        </Container>
        <div id="header11" onClick={logOut}>
          {auth?.user?.email} <HiOutlineLogout id="header12" />
        </div>
      </Navbar>
      {/* navbar2 end */}
      {/* navbar 3 */}
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand}>
          <Container fluid>
            <Navbar.Brand>&nbsp;</Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              id="header8"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Image src={logo} alt="logo" style={{ height: "2rem" }} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {auth.authenticate && (
                  <Nav className="justify-content-center flex-grow-1 pe-3">
                    <Nav.Link id="header7">
                      <Link to="/" id="header9">
                        Dashboard
                      </Link>
                    </Nav.Link>
                    {/* <Nav.Link id="header7">
                    <Link to="/report" id="header9">
                      Generate Report
                    </Link>
                  </Nav.Link> */}
                    {/* <Nav.Link id="header7">
                      <Link to="/addtest" id="header9">
                        Add Test Panel
                      </Link>
                    </Nav.Link> */}
                    {/* <Nav.Link id="header7">Download Reports</Nav.Link> */}
                    <Nav.Link id="header7">
                      <Link to="/managetest" id="header9">
                        Manage Orders
                      </Link>
                    </Nav.Link>
                    <Nav.Link id="header7">
                      <Link to="/testCategory" id="header9">
                        Test Category
                      </Link>
                    </Nav.Link>
                    <Nav.Link id="header7">
                      <Link to="/testdash" id="header9">
                        Test Dashboard
                      </Link>
                    </Nav.Link>
                    <Nav.Link id="header7">
                      <Link to="/slots" id="header9">
                        Slots
                      </Link>
                    </Nav.Link>
                    <Nav.Link id="header7">
                      <Link to="/myprofile" id="header9">
                        My Profile
                      </Link>
                    </Nav.Link>
                  </Nav>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {/* navbar 3 end */}
    </>
  );
}
