import React, { useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBIcon,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "./Bar.css";
import nova from "../../asset/novalogo.png";

import { FaAdversal } from "react-icons/fa";

const Slidebar = () => {
  return (
    <>
      <CDBSidebar
        id="bar3"
        textColor="black"
        backgroundColor="white"
        width="5rem"
      >
        <CDBSidebarHeader 
        // prefix={<i className="fa fa-bars fa-large"></i>}
        >
          <img id="bar4" src={nova} />
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/dashboard">
              <CDBSidebarMenuItem icon="columns">
                <div id="bar1"> Dashboard</div>
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink to="/patholab">
              <CDBSidebarMenuItem icon="building">
                <div id="bar1"> Patholab</div>
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink to="/userlist">
              <CDBSidebarMenuItem icon="users">
                <div id="bar1"> User</div>
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink to="/feedback">
              <CDBSidebarMenuItem icon="comments">
                <div id="bar1"> Feedback</div>
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink to="/advertisement">
              <CDBSidebarMenuItem icon="ad">
                <div id="bar1"> Advertisement</div>
              </CDBSidebarMenuItem>
            </NavLink>

            {/* AboutUs */}
            <NavLink to="/Aboutus">
              <CDBSidebarMenuItem icon="globe">
                <div id="bar1">About us</div>
              </CDBSidebarMenuItem>
            </NavLink>
            {/* privacy policy */}
            <NavLink to="/PrivacyPolicy">
              <CDBSidebarMenuItem icon="percent">
                <div id="bar1">Privacy Policy</div>
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink to="/faq">
              <CDBSidebarMenuItem icon="question-circle">
                <div id="bar1">FAQ</div>
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink to="/terms">
              <CDBSidebarMenuItem icon="file">
                <div id="bar1">Terms</div>
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </>
  );
};

export default Slidebar;
