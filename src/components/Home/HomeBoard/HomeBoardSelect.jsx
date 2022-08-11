import { BoardSelectTab } from "../../Board/View/BoardSelectTab";
import { CommonTitleArea } from "../../common/Layout/Layout";

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
