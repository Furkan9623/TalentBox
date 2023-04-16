import { useContext, useEffect } from "react";
import USER_AUTH from "../services/user-auth-api";
import { profileContext } from "../context/myContext";
const Home = () => {
  const { setProfile } = useContext(profileContext);
  const token = localStorage.getItem("TALENT_BOX_TOKEN");
  console.log(token);

  const getUser = async () => {
    const result = await USER_AUTH(token);
    console.log(result);
    if (result.status === 200) {
      setProfile(result.data.user);
    }
  };
  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);
  return <h1>HOME PAGES</h1>;
};
export default Home;
