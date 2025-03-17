import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
const firstBuildingCommittee = [
  "Dr. J.O Ojesina",
  "Late Pa. A.O. Amori(a.k.a E ma je o duro) as the Secretary",
  "Pa. D.O. Balogun",
];
export default function WhyNameGateway() {
  return (
    <div className="relative p-4">
      <div className="max-w-3xl  mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="">
            <h3 className="text-2xl font-bold my-5">
              Why the name was "Gateway" Baptist Church?
            </h3>
            <p className="text-base leading-8 my-5">
              Have you ever wondered why the church was named "Gateway"? As at
              1960, there was only an entry point from the northern part of the
              country. At the site are of the church was the airport. Also, it
              was and still is the only south-north route for the Nigeria
              Railway. At that time, hardly could anybody come to visit the
              Western Region without passing through the Sanngo area of the
              city. The worshippers, through the divine inspiration as voiced by
              Deacon Lawore, then leader of the preaching station, then
              considered "GATEWAY" BAPTIST CHURCH as the name because it was,
              and still is the Gateway to Heaven, Paradise, Saviour and
              salvation as well as, break-through, success, miracles, blessings,
              redemption and long life and prosperity.
            </p>
            <h3 className="text-2xl font-bold my-5">
              The Pioneer Worshippers:
            </h3>
            <p className="text-base leading-8 my-5">
              Among the lots of worshippers at the inception of Gateway Baptist
              Church in 1960 were Pa James Alabi, Madam Towobola Babalola, Iya
              Ijesa Janet, Madam Emily Lakunbi, Papa Ila Alabi, Pa. Michael
              Ogunlana, Pa Matthew Adeniran and Pa. Bamidele. Majority of them
              are now of blessed memory.
            </p>
            <h3 className="text-2xl font-bold my-5">
              Construction the Church Building:
            </h3>
            <div className="text-base leading-8 my-5">
              <p>
                In the year 1969, the entire members of the church decided to
                enlarge the mud building then used as church. The first Building
                Committee was inaugurated, having Pa. T.A Aderele as the
                Chairman, while others members were:
              </p>
              <ul className="mt-2 space-y-5 text-gray-600">
                {firstBuildingCommittee.map((place) => {
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
              <p>
                The younger brother of the Chairman of the Building Committee,
                Arc. Aderele, of blessed memory, designed the present church
                structure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
