import React from "react";
import styled from "styled-components";
import ThreeImage from "../../../images/figma/dark_arm.svg";
import ThreeColorImage from "../../../images/figma/color_arm.svg";
import ExerciseImage from "../../../images/figma/dark_dumbbell.svg";
import ExerciseColorImage from "../../../images/figma/color_dumbbell.svg";
import FreeImage from "../../../images/figma/dark_free.svg";
import FreeColorImage from "../../../images/figma/color_free.svg";

export function BoardSelectTab({ onChange, item }) {
  return (
    <TabList>
      <TabItem>
        <TabItemImage
          src={item === "threepowerpost" ? ThreeColorImage : ThreeImage}
          style={{ marginLeft: "25px" }}
        />
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            onChange("threepowerpost");
          }}
          style={{
            color: item === "threepowerpost" ? "black" : "#888888",
            fontWeight: item === "threepowerpost" ? "600" : "400",
          }}
        >
          3대력게시판
        </a>
      </TabItem>
      <TabItem>
        <TabItemImage
          src={item === "exercisepost" ? ExerciseColorImage : ExerciseImage}
        />
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            onChange("exercisepost");
          }}
          style={{
            color: item === "exercisepost" ? "black" : "#888888",
            fontWeight: item === "exercisepost" ? "600" : "400",
          }}
        >
          운동게시판
        </a>
      </TabItem>
      <TabItem>
        <TabItemImage src={item === "freepost" ? FreeColorImage : FreeImage} />
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            onChange("freepost");
          }}
          style={{
            color: item === "freepost" ? "black" : "#888888",
            fontWeight: item === "freepost" ? "600" : "400",
          }}
        >
          자유게시판
        </a>
      </TabItem>
    </TabList>
  );
}

const TabList = styled.div`
  display: flex;
  width: 100%;
`;

const TabItem = styled.div`
  font-family: "GangwonEduPower";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  display: flex;
  align-items: center;
  margin: 0px 20px;

  letter-spacing: 1px;
  cursor: pointer;
`;

export const TabItemImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;
