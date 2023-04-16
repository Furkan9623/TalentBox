import { useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import { profileContext } from "../context/myContext";
const Navbar = () => {
  const { profile, setProfile } = useContext(profileContext);
  const URL = "http://localhost:8080";
  const redirect = useNavigate();
  const logoutUser = () => {
    localStorage.removeItem("TALENT_BOX_TOKEN");
    setProfile({});
    redirect("/");
  };
  return (
    <div id="nav-bar">
      <Input placeholder="Search Tutorial.." className="nav-input" />
      <Link to={"/course"}>
        <h4>FREE CODE CAMP</h4>
      </Link>
      {Object.keys(profile).length > 0 ? (
        <div className="profile">
          <span>{profile.name}</span>
          <img src={`${URL}/upload/${profile.imageUrl}`} alt="" />
          <Button
            className="logout-btn"
            buttonText="LOGOUT"
            onClick={logoutUser}
          />
        </div>
      ) : (
        <div>
          <Button buttonText="MENU" className="menu-btn" />
          <Button buttonText="SIGN IN" onClick={() => redirect("/register")} />
        </div>
      )}
    </div>
  );
};
export default Navbar;
