import { styled } from "styled-components";
import { EditorProps } from "../../utils/Types";
import Toolbar from "./Toolbar";

const StyledEditorWrap = styled.div`
  box-sizing: border-box;
  min-width: 600px;
  max-width: 600px;
  height: 100%;
  margin: auto;

  &.maximized {
    min-height: 95vh;
  }

  &.hidden {
    display: none;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    margin: 0;
  }
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

  &.maximized {
    min-height: 95vh;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    margin: 0;
  }
`;
const editorClassNames = (whoIsMaximized: number) =>
  whoIsMaximized === 3 ? "maximized" : whoIsMaximized === 2 ? "hidden" : "";

const Editor: React.FC<EditorProps> = ({
  editorText,
  onChange,
  toggleMaximize,
  whoIsMaximized,
}) => {
  return (
    <StyledEditorWrap className={editorClassNames(whoIsMaximized)}>
      <Toolbar
        name="Editor"
        toggleMaximize={toggleMaximize}
        whoIsMaximized={whoIsMaximized}
        editorText={editorText}
      />
      <StyledTextArea
        className={editorClassNames(whoIsMaximized)}
        onChange={onChange}
        id="editor"
        value={editorText}
      />
    </StyledEditorWrap>
  );
};

export default Editor;
