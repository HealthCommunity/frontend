import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import ProfileContnet from "../components/Profile/Index";
import { WidthAreaSpace } from "../styles/Layout/CommonLayout";

function Profile() {
  return (
    <>
      <Title name="Profile" />
      <Nav />
      <WidthAreaSpace>
        <ProfileContnet />
      </WidthAreaSpace>
    </>
  );
}

export default Profile;
