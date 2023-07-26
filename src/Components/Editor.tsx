import { ChildProps } from "../../utils/Types";
import Toolbar from "./Toolbar";

const Editor: React.FC<ChildProps> = (props) => {
  const { text, onChange } = props;

  return (
    <div id="editorWrap">
      <Toolbar name="Editor" />
      <textarea name="" id="" onChange={onChange}>
        {text}
      </textarea>
    </div>
  );
};

export default Editor;
