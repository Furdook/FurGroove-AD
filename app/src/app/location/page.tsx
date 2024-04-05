export default function Location() {
  return (
    <section
      id="location"
      className="mt-56 h-screen flex-col px-6 lg:w-screen lg:px-0"
    >
      <h2 className="ml-0 w-full text-left text-2xl underline decoration-accent-500 underline-offset-4">
        FORT33 - Leusden
      </h2>
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
      <p className="my-[-1rem] w-full opacity-50">
        Bavoortseweg 25, 3833 BM Leusden, Netherlands
      </p>
      <a
        href="https://www.google.com/maps/place/Fort33+%7C+Poppodium+%7C+Live+muziek+%7C+Cultuurcentrum/@52.131597,5.4123335,17z/data=!3m1!4b1!4m6!3m5!1s0x47c645ca1aa6c905:0xade2abb0d2d81996!8m2!3d52.1315937!4d5.4149138!16s%2Fg%2F12qg23gbq?entry=ttu"
        target="_blank"
        className="cursor-alias rounded-sm outline-2 outline-accent-500 hover:outline"
      >
        <img
          src="/map.webp"
          alt=""
          className="aspect-square rounded-sm object-cover sm:aspect-auto"
        />
      </a>
    </section>
  );
}
