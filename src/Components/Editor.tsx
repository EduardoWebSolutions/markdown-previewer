import { styled } from "styled-components";
import { EditorProps } from "../../utils/Types";
import Toolbar from "./Toolbar";

const EditorW = styled.div`
  box-sizing: border-box;
  min-width: 600px;
  max-width: 600px;
  height: 100%;
  margin: auto;
`;

const TextArea = styled.textarea`
  background-color: #c0d8d8;
  width: 100%;
  height: 100%;
  resize: vertical;
  min-height: 200px;
  border: 1px solid #1d2f2f;
  box-shadow: 1px 1px 10px 2px #3a5f5f;
  border-top: none;

  &:focus {
    outline: none;
  }
`;

const Editor: React.FC<EditorProps> = ({
  text,
  onChange,
  toggleActive,
  isActive,
}) => {
  return (
    <EditorW
      className={isActive === 3 ? "active" : isActive === 2 ? "hidden" : ""}
    >
      <Toolbar name="Editor" toggleActive={toggleActive} isActive={isActive} />
      <TextArea
        className={isActive === 3 ? "active" : isActive === 2 ? "hidden" : ""}
        onChange={onChange}
        id="editor"
      >
        {text}
      </TextArea>
    </EditorW>
  );
};

export default Editor;
