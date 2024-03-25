import Input from "./input";

export default function Text() {
  return (
    <label className="block">
      <Input />
      <input
        disabled
        type="text"
        className="mt-2 w-full rounded-md bg-primary-700 px-4 py-2"
      />
    </label>
  );
}
