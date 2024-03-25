import { useDraggable } from "@dnd-kit/core";
import { Button } from "../ui/button";

export default function Draggable(props: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <li
      className="flex cursor-grab gap-2 rounded-md p-2 hover:bg-primary-700"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {props.icon}
      {props.text}
    </li>
  );
}
