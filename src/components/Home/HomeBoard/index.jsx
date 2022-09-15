// react hook , react
import React from "react";
// recoil ( 상태관리 )

// react library

// styled-components , Style Files
import { WidthAreaHome } from "../../../styles/Layout/Layout";

// Components
import BoardFetchItems from "../../Board/BoardFetchItems";

// Icons , Images

// Share , Utils

function Group({ children, selected }) {
  const elements = React.Children.toArray(children);
  return <>{elements.find(({ props }) => selected === props.category)}</>;
}

function GroupItem({ children }) {
  return <>{children}</>;
}

export default function HomeBoard({ selected }) {
  return (
    <WidthAreaHome>
      <Group selected={selected}>
        <GroupItem category="threepowerpost">
          <BoardFetchItems category={"threepowerpost"} center={true} />
        </GroupItem>
        <GroupItem category="exercisepost">
          <BoardFetchItems category={"exercisepost"} center={true} />
        </GroupItem>
        <GroupItem category="freepost">
          <BoardFetchItems category={"freepost"} center={true} />
        </GroupItem>
      </Group>
    </WidthAreaHome>
  );
}
