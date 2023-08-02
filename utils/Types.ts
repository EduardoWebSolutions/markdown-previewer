import { ChangeEvent } from "react";

export interface EditorProps {
  editorText: string;
  maximizeId: number;
  whoIsMaximized: number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  toggleMaximize: (num: number) => void;
}

export interface PreviewerProps {
  editorText: string;
  maximizeId: number;
  whoIsMaximized: number;
  toggleMaximize: (num: number) => void;
}

export interface ToolbarProps {
  name: string;
  editorText: string;
  whoIsMaximized: number;
  toggleMaximize: (num: number) => void;
}

export interface MinMaxProps {
  whoIsMaximized: number;
  toggleMaximize: (num: number) => void;
}

export type CopyIconProps = {
  onClick: () => void;
};

export type MaximizeIconProps = {
  onClick: () => void;
};
export type MinimizeIconProps = {
  onClick: () => void;
};
