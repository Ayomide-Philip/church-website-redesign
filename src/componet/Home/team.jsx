const team = [
  {
    name: "Rev. Dr. Adedeji Emmanuel Ade",
    role: "UI Developer",
    image: "seniorRved",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "Rev. Dr. Wuyi Oke",
    role: "Designer",
    image: "assistantSeniorRved",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "Rev. Dr. Damola Adeyefa",
    role: "Designer",
    image: "englishRved",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "Rev. Miss Florence  Adedeji",
    role: "UI Developer",
    image: "rvedMiss",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
];

export default function Team() {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-5 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-3xl font-medium title-font mb-4 text-white tracking-widest">
            OUR TEAM
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Our church team is a dedicated group of pastors, leaders, and
            volunteers committed to serving God and our community. With faith,
            love, and unity, we work together to inspire, support, and guide
            others in their spiritual journey.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          {team.map((members) => {
            return (
              <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={`/images/leaders/${members.image}.jpg`}
                  />
                  <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-white">
                      {members.name}
                    </h2>
                    <h3 class="text-gray-500 mb-3">{members.role}</h3>
                    <p class="mb-4">{members.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button class="flex mx-auto mt-10 text-black bg-white border-0 py-2 px-10 focus:outline-none hover:bg-black hover:text-white rounded text-lg">
          Meet The Team
        </button>
      </div>
    </section>
  );
}
