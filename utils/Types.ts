import { ChangeEvent } from "react";

export interface ParentProps {
  text: string;
  onChange: (newText: string) => void;
}
export interface ChildProps {
  text: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface ToolbarProps {
  name: string;
}

export type PreviewerProps = {
  text: string;
};
