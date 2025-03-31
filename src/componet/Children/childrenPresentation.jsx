export default function ChildrenPresentation() {
  return (
    <section className="text-gray-600 body-font">
      <h2 className="text-3xl font-semibold tracking-tight text-center pt-10 text-black sm:text-5xl">
        Presentations from Our Children
      </h2>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex flex-col justify-center items-center bg-gray-100">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:max-w-lg">
                <div className="relative w-full">
                  <iframe
                    title="Children"
                    src="https://www.youtube.com/embed/Zd_n7MTK3pE?si=0Vvq-i-HMnrg7GiX"
                    className="w-full h-auto min-h-[300px] sm:min-h-[400px]"
                    style={{
                      border: "none",
                      display: "block",
                      aspectRatio: "16/9",
                    }}
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                    Bible Chain Competition
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="flex flex-col justify-center items-center bg-gray-100">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:max-w-lg">
                <div className="relative w-full">
                  <iframe
                    title="Christmas Carol"
                    src="https://www.youtube.com/embed/5WMkMhIYPpM?si=uU7_9UL7sXaFf0UW"
                    className="w-full h-auto min-h-[300px] sm:min-h-[400px]"
                    style={{
                      border: "none",
                      display: "block",
                      aspectRatio: "16/9",
                    }}
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                    Christmas Carol
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="flex flex-col justify-center items-center bg-gray-100">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:max-w-lg">
                <div className="relative w-full">
                  <iframe
                    title="Children Drama Presentation"
                    src="https://www.youtube.com/embed/2l5HE0gHTmY?si=9cuPt51yUuBpGkSJ"
                    className="w-full h-auto min-h-[300px] sm:min-h-[400px]"
                    style={{
                      border: "none",
                      display: "block",
                      aspectRatio: "16/9",
                    }}
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                    Children Drama Presentation
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
