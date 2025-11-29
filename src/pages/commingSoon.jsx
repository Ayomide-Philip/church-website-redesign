import Header from "../componet/Header/header";
import Footer from "../componet/Footer/footer";
import { useState } from "react";

export default function CommingSoon() {
  const targetTime = new Date(2025, 12, 15).getTime() + 24 * 60 * 60 * 1000;

  const [timeLeft, setTimeLeft] = useState(targetTime - new Date().getTime());

  const [intervalId, setIntervalId] = useState(null);

  if (timeLeft > 0 && intervalId === null) {
    const id = setInterval(() => {
      const currentTime = new Date().getTime();
      const remainingTime = targetTime - currentTime;

      if (remainingTime <= 0) {
        clearInterval(id);
        setIntervalId(null);
        setTimeLeft(0);
      } else {
        setTimeLeft(remainingTime);
      }
    }, 1000);
    setIntervalId(id);
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <>
      <Header />
      <div
        className="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center px-5"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500)",
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

        <div className="z-1 flex flex-col justify-center text-white font-extrabold w-full h-screen">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl">
            We are <b>Almost</b> Done!
          </h1>
          <p className="text-lg sm:text-xl">Stay tuned for something amazing!!!</p>

          <div className="mt-5 mb-2">
            <div className="shadow w-full mt-2 max-w-2xl mx-auto rounded-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-10 mt-10 lg:mt-5">

                <div className="bg-transparent border text-center py-5">
                  <p className="text-3xl sm:text-4xl md:text-5xl">
                    {days > 9 ? `${days}` : `0${days}`}
                  </p>
                  <hr />
                  <p className="px-5 py-2 text-sm sm:text-base">days</p>
                </div>

                <div className="bg-transparent border text-center py-5">
                  <p className="text-3xl sm:text-4xl md:text-5xl">
                    {hours > 9 ? `${hours}` : `0${hours}`}
                  </p>
                  <hr />
                  <p className="px-5 py-2 text-sm sm:text-base">hours</p>
                </div>

                <div className="bg-transparent border text-center py-5">
                  <p className="text-3xl sm:text-4xl md:text-5xl">
                    {minutes > 9 ? `${minutes}` : `0${minutes}`}
                  </p>
                  <hr />
                  <p className="px-5 py-2 text-sm sm:text-base">mins</p>
                </div>

                <div className="bg-transparent border text-center py-5">
                  <p className="text-3xl sm:text-4xl md:text-5xl">
                    {seconds > 9 ? `${seconds}` : `0${seconds}`}
                  </p>
                  <hr />
                  <p className="px-5 py-2 text-sm sm:text-base">secs</p>
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
