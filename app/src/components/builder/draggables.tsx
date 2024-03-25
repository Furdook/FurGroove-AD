import Draggable from "./draggable";
import { TextCursor, TextIcon, CheckSquare, CheckCircle } from "lucide-react";

export const draggables = [
  <Draggable
    {...{
      icon: <TextCursor size={16} className="mt-[3px]" />,
      text: "Text Input",
      id: 1,
    }}
  />,
  <Draggable
    {...{
      icon: <TextIcon size={16} className="mt-[3px]" />,
      text: "Textarea",
      id: 2,
    }}
  />,
  <Draggable
    {...{
      icon: <CheckSquare size={16} className="mt-[3px]" />,
      text: "Checkbox",
      id: 3,
    }}
  />,
  <Draggable
    {...{
      icon: <CheckCircle size={16} className="mt-[3px]" />,
      text: "Radio",
      id: 4,
    }}
  />,
];
