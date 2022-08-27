import React from "react";

import { SelectTabBar, SelectTabItem } from "./SnsLoginStyle";

export function SNSGroup({ children, selected }) {
  const elements = React.Children.toArray(children);
  return <>{elements.find(({ props }) => selected === props.name)}</>;
}

export function GroupItem({ children }) {
  return <>{children}</>;
}

export function SnsSelectTab({ onChange, typeName, text }) {
  let navSelect = typeName === "emaillogin";

  return (
    <SelectTabBar>
      <SelectTabItem isActive={navSelect}>
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            onChange("emaillogin");
          }}
        >
          {`아이디로 ${text}`}
        </a>
      </SelectTabItem>
      <SelectTabItem isActive={!navSelect}>
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            onChange("snslogin");
          }}
        >
          {`SNS로 ${text}`}
        </a>
      </SelectTabItem>
    </SelectTabBar>
  );
}
