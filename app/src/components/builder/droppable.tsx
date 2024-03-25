import { useDroppable } from "@dnd-kit/core";
import { Plus } from "lucide-react";

export default function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    background: isOver ? "#A2BFFD" : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="w-full rounded-lg bg-primary-700/50"
    >
      {props.children}
      <Plus size={32} className="mx-auto" />
    </div>
  );
}
