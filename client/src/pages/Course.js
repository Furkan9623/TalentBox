import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import USER_AUTH from "../services/user-auth-api";
import { profileContext } from "../context/myContext";

const Course = () => {
  const { setProfile } = useContext(profileContext);
  const token = localStorage.getItem("TALENT_BOX_TOKEN");
  console.log(token);

  const redirect = useNavigate();
  const getUser = async () => {
    const result = await USER_AUTH(token);
    console.log(result);
    if (result.status === 200) {
      setProfile(result.data.user);
    } else {
      alert(result.response.data.message);
    }
  };
  useEffect(() => {
    if (token) {
      getUser();
    } else {
      alert("For access course plzz login");
      console.log("hello");
      redirect("/login");
    }
  }, [token]);
  return (
    <div>
      <div className="course-div">
        <img
          src="https://thumbs.dreamstime.com/b/hands-computer-desk-using-laptop-rustic-wood-background-cup-tea-book-globe-glasses-53253551.jpg"
          alt=""
        />
        <span>(NEW) Responsive Web Design Certification (300hrs)</span>
      </div>
      <div className="course-div">
        <img
          src="https://thumbs.dreamstime.com/b/hands-computer-desk-using-laptop-rustic-wood-background-cup-tea-book-globe-glasses-53253551.jpg"
          alt=""
        />
        <span>
          (NEW) Responsive Web Design Certification
          (300hrs)fdgfddddddddddddddddddddddddddddddddd
        </span>
      </div>
    </div>
  );
};
export default Course;
