import React, { useState } from "react";

import { MdDashboard } from "react-icons/md";
import { FaBars, FaUser } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { CgDanger } from "react-icons/cg";
import { RiGovernmentFill } from "react-icons/ri";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdOutlineHelp } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import logo from "../../assets/image2.png";
import "./Sidebar.css";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Sidebar = ({ children }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/home",
      name: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      path: "/user",
      name: "User",
      icon: <FaUser />,
    },
    {
      path: "/sponsorship",
      name: "Sponsorship",
      icon: <BiDonateHeart />,
    },
    {
      path: "/about",
      name: "About",
      icon: <CgDanger />,
    },
    {
      path: "/govpay",
      name: "Govpay",
      icon: <RiGovernmentFill />,
    },
    {
      path: "/billpay",
      name: "Billpay",
      icon: <FaMoneyBillAlt />,
    },
    {
      path: "/helpcenter",
      name: "Helpcenter",
      icon: <MdOutlineHelp />,
    },
    {
      path: "/alltransaction",
      name: "Alltransaction",
      icon: <RiMoneyDollarCircleFill />,
    },
    {
      path: "/queries",
      name: "Queries",
      icon: <FaHandsHelping />,
    },
    {
      path: "/offer",
      name: "Offer",
      icon: <MdLocalOffer />,
    },
    {
      icon: <FiLogOut />,
      name: "Logout",
    },
  ];
  return (
    <>
      {" "}
      {location.pathname === "/" ? null : (
        <Container fluid>
          <Row>
            <Col
              lg={isOpen ? 2 : 1}
              md={isOpen ? 2 : 1}
              sm={isOpen ? 5 : 3}
              xs={isOpen ? 5 : 3}
              className="sidebar"
            >
              <div id={isOpen ? null : "sidehide1"}>
                <div className="top_section">
                  <img
                    src={logo}
                    alt="logo"
                    loading="lazy"
                    style={{ display: isOpen ? "block" : "none" }}
                    className="logo"
                  />
                  <FaBars onClick={toggle} />
                </div>
                {menuItem.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className="link"
                    activeclassName="active"
                  >
                    <div className="icon">{item.icon}</div>
                    <p
                      id="sidebar1"
                      style={{ display: isOpen ? "block" : "none" }}
                      className="link_text"
                    >
                      {item.name}
                    </p>
                  </NavLink>
                ))}
              </div>
            </Col>
            <Col
              lg={isOpen ? 10 : 11}
              md={isOpen ? 10 : 11}
              sm={isOpen ? 7 : 9}
              xs={isOpen ? 7 : 9}
              id="side2"
            >
              {children}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default Sidebar;
