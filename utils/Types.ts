import { ChangeEvent } from "react";

export interface ParentProps {
  text: string;
  onChange: (newText: string) => void;
<<<<<<< HEAD
  onClick: () => void;
  id: string;
  className: string;
=======
>>>>>>> 2c2e6a850637be18f64ec0e8561fd385ed2e9de0
}
export interface ChildProps {
  text: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
<<<<<<< HEAD
  onClick: () => void;
  id: string;
  className: string;
=======
>>>>>>> 2c2e6a850637be18f64ec0e8561fd385ed2e9de0
}

export interface ToolbarProps {
  name: string;
<<<<<<< HEAD
  onClick: () => void;
=======
>>>>>>> 2c2e6a850637be18f64ec0e8561fd385ed2e9de0
}

export type PreviewerProps = {
  text: string;
<<<<<<< HEAD
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
=======
};
>>>>>>> 2c2e6a850637be18f64ec0e8561fd385ed2e9de0
