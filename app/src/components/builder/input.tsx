import { PencilLine } from "lucide-react";

export default function Input() {
  return (
    <label htmlFor="form-title" className="flex gap-[4px]">
      <input
        type="text"
        placeholder="Question Title"
        className="w-full rounded-s-md bg-primary-700/30 px-4 py-2"
      />
      <PencilLine size={44} className="rounded-e-md bg-primary-700/30 p-2" />
    </label>
  );
}
