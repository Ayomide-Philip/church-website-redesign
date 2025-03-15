const faq = [
  {
    index: 0,
    heading: "In the Triune God",
    content:
      "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit, each fully God yet distinct in role and function.We affirm the biblical teaching  that God is one essence existing in three distinct persons. The Father, Son (Jesus Christ), and Holy Spirit are co-eternal and co-equal, each playing a unique role in creation, redemption, and sustaining the universe.",
  },
  {
    index: 1,
    heading: "In The Autority of The Scripture.",
    content:
      "We believe the Bible is the inspired and authoritative Word of God, revealing God’s will, character, and plan for humanity.Scripture is the divinely inspired record of God's revelation to humanity. It is authoritative in all matters of faith, doctrine, and practice, providing guidance for living a life pleasing to God. ",
  },
  {
    index: 2,
    heading: " In Salvation through Jesus Christ",
    content:
      "We believe in the deity of Jesus Christ, His virgin birth, sinless life, atoning death on the cross, bodily resurrection, ascension to heaven, and future return in power and glory. Jesus Christ, as fully God and fully human, lived a sinless life and sacrificed Himself on the cross to atone for the sins of humanity. Through faith in Christ, we receive forgiveness of sins and eternal life. ",
  },
  {
    index: 3,
    heading: " In Salvation through Jesus Christ",
    content:
      "We believe in the deity of Jesus Christ, His virgin birth, sinless life, atoning death on the cross, bodily resurrection, ascension to heaven, and future return in power and glory. Jesus Christ, as fully God and fully human, lived a sinless life and sacrificed Himself on the cross to atone for the sins of humanity. Through faith in Christ, we receive forgiveness of sins and eternal life. ",
  },
];

export default function Faq() {
  return (
    <div className="space-y-4 pl-10 pr-10 pt-10 pb-10">
      {faq.map((faq) => {
        return (
          <details
            className="group border-s-4 border-blue-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            open={faq.index === 0 ? true : false}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                {faq.heading}
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">{faq.content}</p>
          </details>
        );
      })}
      {/* <details
        className="group border-s-4 border-blue-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing?
          </h2>

          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>

      <details className="group border-s-4 border-blue-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing?
          </h2>

          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details> */}
    </div>
  );
}
