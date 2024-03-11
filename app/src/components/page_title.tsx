export default function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="fixed top-[-1.5rem] z-10 w-full bg-primary-900 pb-2 pl-6 pt-10 text-2xl lg:top-10 lg:pl-0 lg:pt-4">
      {title}
    </h1>
  );
}
