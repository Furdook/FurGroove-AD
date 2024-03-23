export default function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="fixed top-[-1.5rem] z-10 h-fit w-full bg-primary-900/70 pb-2 pl-8 pt-8 text-2xl backdrop-blur lg:relative lg:ml-0 lg:mt-10 lg:pl-0">
      {title}
    </h1>
  );
}
