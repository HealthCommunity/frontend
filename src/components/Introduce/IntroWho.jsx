import {
  IntroWhoDiv,
  IntroWhoImage,
  IntroWhoTItle,
  IntroWhoSubTitle,
} from "./IntroStyle/IntroWhoStyle";
import { FaGithub } from "react-icons/fa";
import { IntroLink } from "../../pages/IntroducePage";
import { IntroTitle } from "./IntroStyle/IntroduceStyle";
function IntroWho() {
  return (
    <>
      <IntroTitle>Who made it?</IntroTitle>
      <IntroWhoDiv>
        <IntroWhoImage
          bgImage={"https://avatars.githubusercontent.com/u/86876414?v=4"}
        />
        <div>
          <IntroWhoTItle>Park Song Hee</IntroWhoTItle>
          <IntroWhoSubTitle>Front End Develope</IntroWhoSubTitle>
          <h3>역할 : </h3>
          <IntroLink href="https://github.com/pasong0511" target="_blank">
            <FaGithub />
          </IntroLink>
        </div>
      </IntroWhoDiv>
      <IntroWhoDiv>
        <IntroWhoImage
          bgImage={"https://t1.daumcdn.net/cfile/tistory/231EB44C56E0F2811B"}
        />
        <div>
          <IntroWhoTItle>Park Hoon Hee</IntroWhoTItle>
          <IntroWhoSubTitle>Back End Develope</IntroWhoSubTitle>
          <h3>역할 : </h3>
          <IntroLink href="https://github.com/qkrgnsgml" target="_blank">
            <FaGithub />
          </IntroLink>
        </div>
      </IntroWhoDiv>
      <IntroWhoDiv>
        <IntroWhoImage
          bgImage={"https://avatars.githubusercontent.com/u/94469974?v=4"}
        />
        <div>
          <IntroWhoTItle>Lee Ji Hoon</IntroWhoTItle>
          <IntroWhoSubTitle>Front End Develope</IntroWhoSubTitle>
          <h3>역할 : </h3>
          <IntroLink href="https://github.com/jiji-hoon96" target="_blank">
            <FaGithub />
          </IntroLink>
        </div>
      </IntroWhoDiv>
      <IntroWhoDiv>
        <IntroWhoImage
          bgImage={"https://avatars.githubusercontent.com/u/58128623?v=4"}
        />
        <div>
          <IntroWhoTItle>Choi Chang Jun</IntroWhoTItle>
          <IntroWhoSubTitle>Back End Develope</IntroWhoSubTitle>
          <h3>역할 : </h3>
          <IntroLink href="https://github.com/changjun6518" target="_blank">
            <FaGithub />
          </IntroLink>
        </div>
      </IntroWhoDiv>
    </>
  );
}

export default IntroWho;
