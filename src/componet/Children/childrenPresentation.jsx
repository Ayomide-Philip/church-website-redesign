export default function ChildrenPresentation() {
  return (
    <section className="text-gray-600 body-font">
      <h2 class="text-3xl font-semibold tracking-tight text-center pt-10 text-black sm:text-5xl">
        Presentations from Our Children
      </h2>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex flex-col justify-center items-center bg-gray-100">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                <div className="relative w-full">
                  <iframe
                    title="Children"
                    src="https://www.facebook.com/plugins/video.php?height=400&href=https%3A%2F%2Fweb.facebook.com%2Fgatewaybaptist.church.33%2Fvideos%2F789766829797271%2F"
                    className="w-full h-[300px]"
                    style={{ border: "none", display: "block" }}
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Beautiful Mountain View
                  </h2>
                  <p className="text-gray-700 leading-tight mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam eu sapien porttitor, blandit velit ac, vehicula
                    elit. Nunc et ex at turpis rutrum viverra.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Avatar"
                        className="w-8 h-8 rounded-full mr-2 object-cover"
                      />
                      <span className="text-gray-800 font-semibold">
                        John Doe
                      </span>
                    </div>
                    <span className="text-gray-600">2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="flex flex-col justify-center items-center bg-gray-100">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                <div className="relative w-full">
                  <iframe
                    title="Children"
                    src="https://www.youtube.com/embed/5WMkMhIYPpM?si=uU7_9UL7sXaFf0UW"
                    className="w-full h-[300px]"
                    style={{ border: "none", display: "block" }}
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Beautiful Mountain View
                  </h2>
                  <p className="text-gray-700 leading-tight mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam eu sapien porttitor, blandit velit ac, vehicula
                    elit. Nunc et ex at turpis rutrum viverra.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Avatar"
                        className="w-8 h-8 rounded-full mr-2 object-cover"
                      />
                      <span className="text-gray-800 font-semibold">
                        John Doe
                      </span>
                    </div>
                    <span className="text-gray-600">2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="flex flex-col justify-center items-center bg-gray-100">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                <div className="relative w-full">
                  <iframe
                    title="Children"
                    src="https://www.youtube.com/embed/2l5HE0gHTmY?si=9cuPt51yUuBpGkSJ"
                    className="w-full h-[300px]"
                    style={{ border: "none", display: "block" }}
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                    Children  Drama Presentation
                  </h2>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
