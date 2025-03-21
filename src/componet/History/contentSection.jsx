import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
const placeIdentified = [
  "Agugu",
  "Oba-Oloke",
  "Police College",
  "Eleyele",
  "Sanngo",
  "Agodi Prison",
];
export default function FoundingandEstablishing() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Founding and Establishing the Church.
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                Obedience to God Almighty Father's directive that all Christians
                should go into the world and preach the gospel, a preaching
                station of the Union Baptist Church, Ekotedo, in Ibadan city,
                began in October 1960. The vision to start church planting
                started with the Late Revd. Theophilus Adedeji Adejumobi became
                the pastor of the church. In one of his sermons on soul winning,
                in 1958, many people responded to become soul winners and the
                RIEL club [Religion In Everyday Life] was inaugurated .
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="history"
            src="/images/history.jpg"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p className="mt-3 text-xl/8 text-gray-700">
                Some members of the club included Mr. Oladipo, Mr. A.O
                Fakorede(now Deacon Fakorede, Former president of Deacons
                fellowship of the Convection), Mr. A.B Farinde, Miss Bimpe
                Atanda(now Mrs. Adigun), Mr. Johnson Ogundele, Mr. Afuwape, Mr.
                D.O Amoo(Now Deacon) and late Dn. S.O Lawore. Members of this
                club became evangelism team of the church.
              </p>
              <p className="mt-3 text-xl/8 text-gray-700">
                Mr. Solomon Akintola Aderounmu, a member of the church working
                with the Ministry of Lands and Survey at the Government
                Secretariat, Agodi, Ibadan, was assigned responsibilities of
                mapping out the city of Ibadan and to identify where church
                could be planted. Places identified were:
              </p>
              <ul className="mt-8 space-y-5 text-gray-600">
                {placeIdentified.map((place) => {
                  return (
                    <li className="flex gap-x-1">
                      <ArrowLongRightIcon
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-indigo-600"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          {place}.
                        </strong>
                      </span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-3 text-xl/8 text-gray-700">
                Of the place mapped out, the only place the RIEL Club succeeded
                in planting a church at that time was Sanngo.The church was the
                first church to be established at the area Sanngo and environs.
                The initial church service was held at Late Pa. James Alabis
                house. The host was popularly known as 'Baba Ikaramu'. Baba
                Ikaramu house was located opposite the Nigerian Railway line,
                Bodija Housing Estate, Sanngo-Elewure, Ibadan.
              </p>
              <p className="mt-3 text-xl/8 text-gray-700">
                Soon after the church premises got acquired by the Government of
                Western Region. Thus, the church moved to Baba Ikaramus (Pa.
                James Alabis) house. The house was near the Railway Staff
                Headquaters, Sanngo Ibadan. When the number of the worshippers
                increased significantly, a tent was erected very close to the
                present church building. However, within three years, a move was
                made to dispose of the piece of Lands. The entire members
                contributed money to purchase the land. A small building was
                erected through communal labour when the Western Nigeria Town
                Planning Authority approve the proposed building plan for the
                church.
              </p>
              <p className="mt-3 text-xl/8 text-gray-700">
                When the church was growing with increasing number of
                worshippers, the late Deacon Amos Jolaade Adegun was deployed
                from the mother church to succeed late Deacon Lawore, as the
                leader of the church. However, Chief M.O Ogunnowo and other
                church members worked tirelessly to sustain the the progress
                achieved then in the church. It would also be necessary here to
                mention that love had been existing in Gateway Baptist Church
                for a long time ago.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
