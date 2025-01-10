import metadata from "./block.json";
import Edit from "./edit";
import Save from "./save";
import IconCard from "./icon";
import "./style.scss";

const DEOHSText = {
  ...metadata,
  icon: IconCard,
  edit: Edit,
  save: Save,
};

export default DEOHSText;

