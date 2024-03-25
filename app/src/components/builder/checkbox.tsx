import { PencilLine, X } from "lucide-react";
import Input from "./input";

export default function Checkbox(props: { count: number }) {
  return (
    <label className="flex flex-col gap-2">
      <Input />
      {[...Array(props.count)].map((_, i) => {
        return checkboxInput(i);
      })}
    </label>
  );
}

export const checkboxInput = (number: number) => (
  <label className="flex flex-row gap-2">
    <input
      disabled
      type="checkbox"
      className="mt-2 h-4 w-4 rounded-md bg-primary-700"
    />
    <label className="flex gap-[4px]">
      <input
        type="text"
        placeholder={`Option ${number + 1}`}
        className="ml-2 w-56 rounded-s-md bg-primary-700/30 px-4"
      />
      <PencilLine size={40} className="rounded-e-md bg-primary-700/30 px-2" />
    </label>
  </label>
);
