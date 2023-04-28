import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

import * as FaIcons from "react-icons/fa";
import styled from "styled-components";

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 90px;
  padding: 1rem 0 1.25rem;
`;

const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 20px;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #000080;
    width: 100%;
    height: 45px;
    text-align: center;
    border-radius: 5px;
    margin: 0 2rem;
  }
`;

const Sidebar: React.FunctionComponent = () => {
  const [close, setClose] = useState(false);

  const showSidebar = () => {
    console.log("close...", close);
    if (close === true) {
      setClose(false);
    } else if (close === false) {
      setClose(true);
    }
  };

  return (
    <>
      <div className="align-items-center bg-primary d-flex justify-content-start">
        <div
          className="d-flex h2 justify-content-start m-2 text-white"
          onClick={showSidebar}
        >
          <FaIcons.FaBars />
        </div>
      </div>
      <div
        className="bg-primary w-25 position-fixed"
        style={{
          height: "100vh",
          top: 0,
          left: `${close ? "0" : "-100%"}`,
          transition: "0.6s",
        }}
      >
        <div className=" row-container d-flex  m-3 text-white h5 w-100">
          <div className="col-10">Test app</div>
          <div onClick={showSidebar}>
            <FaIcons.FaTimes />
          </div>
        </div>

        {SidebarData.map((item, index) => {
          return (
            <MenuItems key={index}>
              <MenuItemLinks to={item.path}>
                {item.icon}
                <span style={{ marginLeft: "16px" }}>{item.title}</span>
              </MenuItemLinks>
            </MenuItems>
          );
        })}
      </div>
    </>
  );
};
export default Sidebar;
