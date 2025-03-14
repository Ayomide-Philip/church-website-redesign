const team = [
  {
    name: "Rev. Dr. Adedeji Emmanuel Ade",
    role: "UI Developer",
    image: "seniorRved",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "Alper Kamu",
    role: "Designer",
    image: "assistantSeniorRved",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "Atticus Finch",
    role: "UI Developer",
    image: "rvedMiss",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "Henry Letham",
    role: "Designer",
    image: "https://dummyimage.com/206x206",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
];

export default function Team() {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-2xl font-medium title-font mb-4 text-white tracking-widest">
            OUR TEAM
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
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
          {/* <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/images/leaders/seniorRved.jpg"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-white">
                  Rev'd Dr. Adedeji Emmanuel Ade
                </h2>
                <h3 class="text-gray-500 mb-3">UI Developer</h3>
                <p class="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
              </div>
            </div>
          </div>

          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://dummyimage.com/201x201"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-white">
                  Alper Kamu
                </h2>
                <h3 class="text-gray-500 mb-3">Designer</h3>
                <p class="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://dummyimage.com/204x204"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-white">
                  Atticus Finch
                </h2>
                <h3 class="text-gray-500 mb-3">UI Developer</h3>
                <p class="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://dummyimage.com/206x206"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-white">
                  Henry Letham
                </h2>
                <h3 class="text-gray-500 mb-3">Designer</h3>
                <p class="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
