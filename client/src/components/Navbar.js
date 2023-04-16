import Button from "./Button";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const redirect = useNavigate();
  return (
    <div id="nav-bar">
      <Input placeholder="Search Tutorial.." className="nav-input" />
      <Link to={"/course"}>
        <h4>FREE CODE CAMP</h4>
      </Link>
      <div>
        <Button buttonText="MENU" />
        <Button buttonText="SIGN IN" onClick={() => redirect("/register")} />
      </div>
    </div>
  );
};
export default Navbar;
