import Title from "../components/Title";
import Nav from "../component/Navbar/index";
import ContentBody from "../components/Profile/ContentBody";
import { ProfileBackgroud } from "../components/Profile/ProfileLayout";
import { WidthAreaSpace } from "../components/Layout/CommonLayout";

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
