/* <h1 class="font-semibold text-lg mt-4 dark:text-white">
              1. The Gateway Baptist Church (Community of Grace) exists to
              fulfill the Great Commandment and the great Commission.
            </h1>
            <p class="mt-2 text-md dark:text-gray-300">
              In Matthew 22:37-40, Jesus emphasizes the importance of loving God
              with all our heart, soul, and mind, and loving our neighbors as
              ourselves, stating that all the law and the Prophets are based on
              these two commandments. In Matthew 28:19-20, Jesus commands his
              followers to go and make disciples of all nations, baptizing them
              in the name of the Father, Son, and Holy Spirit, and teaching them
              to obey all that He has commanded. Both passages highlight the
              core of Christian teaching: love for God and others, and the
              mission to spread this love through discipleship and obedience.
            </p>

            <h1 class="font-semibold text-lg mt-4 dark:text-white">
              2. To organize and maintain the following programmes and
              departments.
            </h1>
            <p class="mt-2 text-md dark:text-gray-300">
              The Nigerian Baptist Convention supports a variety of programs and
              departments aimed at fostering spiritual growth and community
              engagement. These include Sunday School, Church Training
              Programmes, the Women Missionary Union, the Men Missionary Union,
              House Fellowship or Cell Groups, as well as any other programs or
              departments that may be approved by the Convention. These
              initiatives work together to encourage learning, fellowship, and
              mission work within the church community.
            </p>

            <h1 class="font-semibold text-lg mt-4 dark:text-white">
              3. To encourage group activities for enhancing the growth of the
              church.
            </h1>
            <p class="mt-2 text-md dark:text-gray-300">
              The church seeks to encourage group activities that foster a sense
              of community and collaboration, aimed at enhancing its growth both
              spiritually and numerically. These group activities provide
              opportunities for individuals to connect with one another, share
              their faith, and support each other in their spiritual journeys.
            </p> */

const purposeStatement = [
  {
    id: 1,
    heading:
      "The Gateway Baptist Church (Community of Grace) exists to fulfill the Great Commandment and the great Commission.",
    paragraph:
      "In Matthew 22:37-40, Jesus emphasizes the importance of loving God with all our heart, soul, and mind, and loving our neighbors as  ourselves, stating that all the law and the Prophets are based on  these two commandments. In Matthew 28:19-20, Jesus commands his followers to go and make disciples of all nations, baptizing them  in the name of the Father, Son, and Holy Spirit, and teaching them  to obey all that He has commanded. Both passages highlight the  core of Christian teaching: love for God and others, and the mission to spread this love through discipleship and obedience.",
  },
  {
    id: 2,
    heading:
      "To organize and maintain the following programmes and departments.",
    paragraph:
      "The Nigerian Baptist Convention supports a variety of programs and departments aimed at fostering spiritual growth and community engagement. These include Sunday School, Church Training Programmes, the Women Missionary Union, the Men Missionary Union, House Fellowship or Cell Groups, as well as any other programs or departments that may be approved by the Convention. These initiatives work together to encourage learning, fellowship, and mission work within the church community.",
  },
];

export default function MissionSection() {
  return (
    <div class="w-full h-full bg-white dark:bg-gray-800">
      <div class="w-full mx-auto py-5 bg-white dark:bg-gray-800">
        <div class="w-[90%] mx-auto flex md:gap-4 xs:gap-2 justify-center items-center pt-2">
          <div class="flex gap-2 items-center">
            <img
              src="/images/images.png"
              alt="Church Profile"
              class="md:w-[2.2rem] md:h-[2.2rem] xs:w-[2rem] xs:h-[2rem] rounded-full"
            />
            <h2 class="text-sm font-semibold dark:text-white">
              Gateway Baptist Church
            </h2>
          </div>

          <div class="dark:text-gray-500">|</div>
          <h4 class="text-sm font-semibold text-gray-600 dark:text-gray-400">
            5 MIN READ
          </h4>
        </div>
        <h1 class="w-[92%] mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold pb-2 pt-2 dark:text-white">
          Our Purpose Statement | Our Mission and Vision as a Church.
        </h1>
        <div class="py-2 bg-white dark:bg-gray-800">
          <div class="md:w-[80%] xs:w-[90%] mx-auto pt-4">
            {purposeStatement.map((purpose) => {
              return (
                <>
                  <h1
                    key={purpose.id}
                    class="font-semibold text-lg mt-4 dark:text-white"
                  >
                    {purpose.id}. {purpose.heading}
                  </h1>
                  <p key={purpose.id} class="mt-2 text-md dark:text-gray-300">
                    {purpose.paragraph}
                  </p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
