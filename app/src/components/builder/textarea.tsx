import Input from "./input";

export default function Textarea() {
  return (
    <label>
      <Input />
      <textarea
        disabled
        className="mt-2 w-full rounded-md bg-primary-700 px-4 py-2"
      />
    </label>
  );
}
