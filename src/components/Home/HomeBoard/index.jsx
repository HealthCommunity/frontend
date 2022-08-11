import React from "react";
import BoardFetchItems from "../../Board/View/BoardFetchItems";
import { CommonContentArea } from "../../common/Layout/Layout";

export default function HomeBoard({ selected }) {
  return (
    <CommonContentArea>
      <Group selected={selected}>
        <GroupItem category="threepowerpost">
          <BoardFetchItems category={"threepowerpost"} />
        </GroupItem>
        <GroupItem category="exercisepost">
          <BoardFetchItems category={"exercisepost"} />
        </GroupItem>
        <GroupItem category="freepost">
          <BoardFetchItems category={"freepost"} />
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
