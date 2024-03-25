"use client";

import { TextCursor, TextIcon, CheckSquare, CheckCircle } from "lucide-react";
import Draggable from "@/components/builder/draggable";
import Droppable from "@/components/builder/droppable";
import { DndContext } from "@dnd-kit/core";
import { PencilLine } from "lucide-react";
import { useState } from "react";
import Text from "@/components/builder/text";
import Textarea from "@/components/builder/textarea";
import Checkbox from "@/components/builder/checkbox";
import { Button } from "@/components/ui/button";

export default function Builder() {
  const [isDropped, setIsDropped] = useState(false);
  const [isDragging, setIsDragging] = useState(0);
  const [form, setForm] = useState<React.ReactElement[]>([]);
  const formItems = [<Text />, <Textarea />, <Checkbox count={2} />];

  const draggables = [
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

  function handleDragEnd(event: any) {
    if (event.over) {
      setIsDragging(event.active.id);
      setIsDropped(true);
      setForm([...form, formItems[event.active.id - 1]]);
      setIsDragging(0);
      setIsDropped(false);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <main className="mx-auto mb-[-10rem] flex h-auto max-w-6xl flex-row gap-2 px-6 pt-12 lg:w-screen">
        <aside className="sticky top-10 h-screen w-56 rounded-lg bg-primary-800 p-2">
          <h1 className="p-4 text-xl underline decoration-accent-500 underline-offset-4">
            Inputs
          </h1>
          <ul className="mt-10 space-y-4">
            {draggables.map((_, index) => draggables[index])}
          </ul>
        </aside>

        <section
          id="builder"
          className="mr-6 flex w-full max-w-4xl flex-col gap-4 rounded-lg bg-primary-800 p-6"
        >
          <h1 className="text-xl underline decoration-accent-500 underline-offset-4">
            Form Builder
          </h1>

          <div className="mt-12 text-lg">
            <label htmlFor="form-title" className="flex gap-[4px]">
              <input
                type="text"
                placeholder="Form Title"
                className="w-full rounded-s-md bg-primary-700 px-4 py-2"
              />
              <PencilLine
                size={44}
                className="rounded-e-md bg-primary-700 p-2"
              />
            </label>
          </div>

          {form.map((item, index) => {
            return (
              <div>
                {item}
                {form[index].type.toString().includes("Checkbox") ? (
                  <Button
                    className="mt-2 w-full"
                    variant="outline"
                    onClick={() => {
                      setForm([
                        ...form.slice(0, index),
                        <Checkbox count={form[index].props.count + 1} />,
                        ...form.slice(index + 1),
                      ]);
                    }}
                  >
                    Add Option
                  </Button>
                ) : null}
                <Button
                  variant="destructive"
                  className="mt-2 w-full"
                  onClick={() => {
                    setForm(form.filter((_, i) => i !== index));
                  }}
                >
                  Remove Field
                </Button>
              </div>
            );
          })}
          <hr className="mx-auto my-2 w-11/12 opacity-30" />
          <Droppable>{isDropped ? draggables[isDragging - 1] : null}</Droppable>
        </section>
      </main>
    </DndContext>
  );
}
