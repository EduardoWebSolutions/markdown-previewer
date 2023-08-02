import { styled } from "styled-components";
import { EditorProps } from "../../utils/Types";
import Toolbar from "./Toolbar";

const StyledEditorWrap = styled.div`
  box-sizing: border-box;
  min-width: 600px;
  max-width: 600px;
  height: 100%;
  margin: auto;
`;

const StyledTextArea = styled.textarea`
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
  editorText,
  onChange,
  toggleMaximize,
  whoIsMaximized,
}) => {
  return (
    <StyledEditorWrap
      className={
        whoIsMaximized === 3
          ? "maximized"
          : whoIsMaximized === 2
          ? "hidden"
          : ""
      }
    >
      <Toolbar
        name="Editor"
        toggleMaximize={toggleMaximize}
        whoIsMaximized={whoIsMaximized}
        editorText={editorText}
      />
      <StyledTextArea
        className={
          whoIsMaximized === 3
            ? "maximized"
            : whoIsMaximized === 2
            ? "hidden"
            : ""
        }
        onChange={onChange}
        id="editor"
      >
        {editorText}
      </StyledTextArea>
    </StyledEditorWrap>
  );
};

export default Editor;
