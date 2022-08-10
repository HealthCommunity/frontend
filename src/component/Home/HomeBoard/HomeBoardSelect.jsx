import { BoardSelectTab } from "../../Borad/View/BoardSelectTab";
import { CommonTitleArea } from "../../common/Layout/Layout";

export default function HomeBoardSelect({ selected, setSelected }) {
  return (
    <CommonTitleArea>
      <BoardSelectTab
        onChange={(category) => {
          setSelected(category);
        }}
        item={selected}
        typeName={selected}
      />
    </CommonTitleArea>
  );
}
