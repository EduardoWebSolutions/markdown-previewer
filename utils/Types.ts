import { ChangeEvent } from "react";

export interface ParentProps {
  text: string;
  onChange: (newText: string) => void;
  onClick: () => void;
  id: string;
  className: string;
}
export interface ChildProps {
  text: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClick: () => void;
  id: string;
  className: string;
}

export interface ToolbarProps {
  name: string;
  onClick: () => void;
}

export type PreviewerProps = {
  text: string;
  onClick: () => void;
  id: string;
  className: string;
};

export interface MaximizeProps {
  className?: string;
  onClick: () => void;
  id: () => void;
}

export interface MinimizeProps {
  className?: string;
  onClick: () => void;
  id: () => void;
}
