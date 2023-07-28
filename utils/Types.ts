import { ChangeEvent } from "react";

export interface EditorProps {
  text: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  isMinimized: boolean;
  onMinMaxClick: () => void;
  name: string;
}

export interface PreviewerProps {
  text: string;
  isMinimized: boolean;
  onMinMaxClick: () => void;
  name: string;
}

export interface ToolbarProps {
  name: string;
  isMinimized: boolean;
  onMinMaxClick: () => void;
}

export interface MinMaxProps {
  active: boolean;
  onClick: () => void;
}
