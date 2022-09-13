import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import ProfileContnet from "../components/Profile/Index";
import { WidthAreaSpace, WidthAreaInner } from "../styles/Layout/Layout";

export default function Profile() {
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
