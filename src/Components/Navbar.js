import React, { useState, useContext } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function MenuExamplePointing() {
  const context = useContext(UserContext);
  const [activeItem, setActiveItem] = useState("signin");
  const [activeItem2, setActiveItem2] = useState("home");

  console.log("activeItem", activeItem);
  return (
    <div>
      <Menu pointing>
        {context.user?.email ? (
          <>
            <Menu.Item active={activeItem2 === "home"}>
              <Link to="/" onClick={() => setActiveItem2("home")}>
                Home{" "}
                {context.user?.email ? context.user.email : "No User Specified"}
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                onClick={() => {
                  context.setUser(null);
                }}
              >
                {/* onClick={() => setActiveItem("logout")}> */}
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
