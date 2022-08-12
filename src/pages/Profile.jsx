import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import ContentBody from "../components/Profile/ContentBody";
import { ProfileBackgroud } from "../components/Profile/ProfileLayout";
import { WidthAreaSpace } from "../styles/Layout/CommonLayout";

function Profile() {
  return (
    <>
      <Title name="Profile" />
      <Nav />
      <WidthAreaSpace>
        <ProfileBackgroud>
          <ContentBody />
        </ProfileBackgroud>
      </WidthAreaSpace>
    </>
  );
}

export default Profile;
