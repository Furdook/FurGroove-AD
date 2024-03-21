export default function Location() {
  return (
    <section
      id="location"
      className="mb-56 mt-96 h-screen flex-col  gap-6 px-6 lg:w-screen lg:px-0"
    >
      <h1 className="ml-0 w-full text-left text-2xl underline decoration-accent-500">
        FORT33 - Leusden
      </h1>
      <div className="flex flex-row">
        <div className="relative my-auto flex-shrink">
          <p className="text-md relative ">
            <span className="absolute left-[-1rem] top-[-2rem]">“</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
            <span className="absolute bottom-[-3.5rem]">”</span>
          </p>
        </div>
        <img
          src="/fort33.png"
          alt=""
          className="hidden h-40 saturate-0 transition-all duration-200 hover:saturate-100 sm:block"
        />
      </div>

      <hr className="w-full" />
      <p className="w-full opacity-50">
        Bavoortseweg 25, 3833 BM Leusden, Netherlands
      </p>
      <img src="map.webp" alt="" className="rounded-sm" />
    </section>
  );
}
