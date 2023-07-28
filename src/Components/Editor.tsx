<<<<<<< HEAD
import { styled } from "styled-components";
import { ChildProps } from "../../utils/Types";
import Toolbar from "./Toolbar";

const EditorW = styled.div`
  box-sizing: border-box;
  min-width: 600px;
  max-width: 600px;
  margin: auto;
`;

const TextArea = styled.textarea`
  background-color: #c0d8d8;
  width: 100%;
  height: 100%;
  resize: vertical;
  min-height: 200px;

  &:focus {
    outline: none;
  }
`;

const Editor: React.FC<ChildProps> = (props) => {
  const { text, onChange, onClick } = props;

  return (
    <EditorW>
      <Toolbar name="Editor" onClick={onClick} />
      <TextArea name="" id="" onChange={onChange}>
        {text}
      </TextArea>
    </EditorW>
=======
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
>>>>>>> 2c2e6a850637be18f64ec0e8561fd385ed2e9de0
  );
};

export default Editor;
