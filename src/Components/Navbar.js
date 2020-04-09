import React, { useState, useContext } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function MenuExamplePointing() {
  const [activeItem, setActiveItem] = useState("home");
  const context = useContext(UserContext);

  console.log("activeItem", activeItem);
  return (
    <div>
      <Menu pointing>
        {context.user?.email ? (
          <>
            <Menu.Item active={activeItem === "home"}>
              <Link to="/" onClick={() => setActiveItem("home")}>
                Home{" "}
                {context.user?.email ? context.user.email : "No User Specified"}
              </Link>
            </Menu.Item>
            <Menu.Item active={activeItem === "logout"}>
              <Link to="/logout" onClick={() => setActiveItem("logout")}>
                LogOut
              </Link>
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item active={activeItem === "signin"}>
              <Link to="/signin" onClick={() => setActiveItem("signin")}>
                SignIn
              </Link>
            </Menu.Item>
            <Menu.Item active={activeItem === "signup"}>
              <Link to="/signup" onClick={() => setActiveItem("signup")}>
                SignUp
              </Link>
            </Menu.Item>
          </>
        )}

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
