import Image from "next/image";

export default function Information() {
  return (
    <section
      id="info"
      className="flex-col px-6 lg:w-screen lg:flex-row lg:px-0"
    >
      <Image
        src="/djboy.webp"
        height={400}
        width={400}
        alt="Beatbird performing at FurGroove 1!"
        className="w-full rounded-sm shadow-lg"
      />
      <p className="my-auto leading-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat in
        repudiandae incidunt mollitia maxime, error recusandae possimus delectus
        optio doloribus, vitae molestias temporibus nemo eos nisi accusamus aut
        quam facilis deleniti ut beatae enim dignissimos dolore animi. Aliquid
        tempore dolorum laboriosam consectetur, sequi numquam natus cum rem illo
        nulla neque incidunt excepturi ipsum porro, tenetur saepe minus,
        perferendis non molestiae culpa placeat quaerat vel odit asperiores.
        Voluptate minima sequi nesciunt molestiae numquam facilis aliquam,
        delectus, itaque iste in velit rerum.
      </p>
    </section>
  );
}
