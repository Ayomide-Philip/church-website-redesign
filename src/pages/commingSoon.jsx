import Header from "../componet/Header/header";
import Footer from "../componet/Footer/footer";
import { useState } from "react";

export default function CommingSoon() {
  const targetTime = new Date(2025, 4, 15).getTime() + 24 * 60 * 60 * 1000; // 50 days in milliseconds

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
                  <p class="text-5xl px-10 py-5">
                    {days > 9 ? `${days}` : `0${days}`}
                  </p>
                  <hr />
                  <p class="px-10 py-5">days</p>
                </div>

                <div class="bg-transparent border text-center">
                  <p class="text-5xl px-10 py-5">
                    {hours > 9 ? `${hours}` : `0${hours}`}
                  </p>
                  <hr />
                  <p class="px-10 py-5">hours</p>
                </div>

                <div class="bg-transparent border text-center">
                  <p class="text-5xl px-10 py-5">
                    {minutes > 9 ? `${minutes}` : `0${minutes}`}
                  </p>
                  <hr />
                  <p class="px-10 py-5">mins</p>
                </div>
                <div class="bg-transparent border text-center">
                  <p class="text-5xl px-10 py-5">
                    {seconds > 9 ? `${seconds}` : `0${seconds}`}
                  </p>
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
