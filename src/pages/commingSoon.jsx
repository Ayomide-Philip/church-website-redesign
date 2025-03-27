import Header from "../componet/Header/header";
import Footer from "../componet/Footer/footer";

export default function CommingSoon() {
  return (
    <>
      <Header />
      <div
        class="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center px-5"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500)",
        }}
      >
        <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

        <div class="z-1 flex flex-col justify-center text-white font-extrabold w-full h-screen">
          <h1 class="text-5xl">
            We are <b>Almost</b> Done!
          </h1>
          <p>Stay tuned for something amazing!!!</p>

          <div class="mt-5 mb-2">
            <div class="shadow w-full mt-2 max-w-2xl mx-auto rounded-full">
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 lg:mt-2">
                <div class="bg-transparent border text-center">
                  <p class="text-5xl px-10 py-5">50</p>
                  <hr />
                  <p class="px-10 py-5">days</p>
                </div>

                <div class="bg-transparent border text-center">
                  <p class="text-5xl px-10 py-5">00</p>
                  <hr />
                  <p class="px-10 py-5">hours</p>
                </div>

                <div class="bg-transparent border text-center">
                  <p class="text-5xl px-10 py-5">00</p>
                  <hr />
                  <p class="px-10 py-5">mins</p>
                </div>
                <div class="bg-transparent border text-center">
                  <p class="text-5xl px-10 py-5">00</p>
                  <hr />
                  <p class="px-10 py-5">secs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
