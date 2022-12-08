import React from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../utils/api";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const signIn = () => {
    navigate("/login");
  };
  return (
    <div className="header_wrapper">
      <ul className="content_wrapper">
        <li>
          <Link className="link_content" to={`/home`}>
            Customer Manager
          </Link>
        </li>
        {token ? (
          <li>
            <form onSubmit={logout}>
              <PrimaryButton type="submit">Sign Out</PrimaryButton>
            </form>
          </li>
        ) : (
          <li>
            <form onSubmit={signIn}>
              <PrimaryButton type="submit">Sign In</PrimaryButton>
            </form>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
