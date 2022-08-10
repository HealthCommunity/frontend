import React from "react";
import BoardCategory from "../../Borad/View/BoardCategory";
import { CommonContentArea } from "../../common/Layout/Layout";

export default function HomeBoard({ selected }) {
  return (
    <CommonContentArea>
      <Group selected={selected}>
        <GroupItem category="threepowerpost">
          <BoardCategory category={"/threepower"} />
        </GroupItem>
        <GroupItem category="exercisepost">
          <BoardCategory category={"/exercise"} />
        </GroupItem>
        <GroupItem category="freepost">
          <BoardCategory category={"/free"} />
        </GroupItem>
      </Group>
    </CommonContentArea>
  );
}

function Group({ children, selected }) {
  const elements = React.Children.toArray(children);
  return <>{elements.find(({ props }) => selected === props.category)}</>;
}

function GroupItem({ children }) {
  return <>{children}</>;
}
