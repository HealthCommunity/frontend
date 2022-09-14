// react hook , react

// recoil ( 상태관리 )

// react library

// styled-components , Style Files
import { WidthAreaSpace, WidthAreaInner } from "../styles/Layout/Layout";

// Components
import Nav from "../components/Navbar/index";
import ProfileContnet from "../components/Profile/Index";

// Icons , Images

// Share , Utils
import Title from "../utils/Title/Title";

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
