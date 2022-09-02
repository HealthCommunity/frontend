import { BoardSelectTab } from "./BoardSelectTab";
import { CommonTitleArea } from "../../../styles/Layout/Layout";

export default function HomeBoardSelect({ selected, setSelected }) {
  return (
    <CommonTitleArea>
      <BoardSelectTab
        onChange={(category) => {
          setSelected(category);
        }}
        typeName={selected}
      />
    </CommonTitleArea>
  );
}
