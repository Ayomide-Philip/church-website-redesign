export default function ChildrenLeader() {
  return (
    <section class="text-white bg-gray-500 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Revd Mrs Florence Oluwakemi Adedeji - Children’s Ministry Director
          </h1>
          <p class="mb-8 leading-relaxed">
            Revd Mrs Florence Oluwakemi Adedeji has been leading our Children’s
            Ministry for quite long number years. She Worked at Ebenezer High
            School, Ibadan, Studied at The Nigerian Baptist Theology Seminary
            Ogb, Went to polytechnic high school ibadan. She is committed to
            creating a loving and engaging environment for all children.
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" style={{ width: '720px', height: '600px' }}>
          <img
            class="object-cover object-center rounded "
            alt="hero"
            src="/images/leaders/guidingLight/rvedMiss.jpg"
          />
        </div>
      </div>
    </section>
  );
}
