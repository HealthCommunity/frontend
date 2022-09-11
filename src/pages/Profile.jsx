import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import ProfileContnet from "../components/Profile";
import { WidthAreaSpace, WidthAreaInner } from "../styles/Layout/Layout";

function Profile() {
  return (
    <>
      <Title name="Profile" />
      <Nav />
      <WidthAreaSpace>
        <WidthAreaInner>
          <ProfileContnet />
        </WidthAreaInner>
      </WidthAreaSpace>
    </>
  );
}

export default Profile;
