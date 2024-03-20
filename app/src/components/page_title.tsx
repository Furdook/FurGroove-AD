export default function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="fixed top-[-1.5rem] z-10 h-fit w-full bg-primary-900 pb-2 pl-6 pt-10 text-2xl lg:relative lg:ml-0 lg:mt-8 lg:pl-0">
      {title}
    </h1>
  );
}
