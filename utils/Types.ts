import { ChangeEvent } from "react";

export interface EditorProps {
  text: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  num: number;
  toggleActive: (num: number) => void;
  isActive: number;
}

export interface PreviewerProps {
  text: string;
  toggleActive: (num: number) => void;
  num: number;
  isActive: number;
}

export interface ToolbarProps {
  name: string;
  toggleActive: (num: number) => void;
  isActive: number;
}

export interface MinMaxProps {
  toggleActive: (num: number) => void;
  isActive: number;
}

export interface MaximizeIconProps {
  onClick: () => void;
}
export interface MinimizeIconProps {
  onClick: () => void;
}
