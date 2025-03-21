import React, { useEffect, useState } from "react";
import Header from "../componet/Header/header";
import VideoBanner from "../componet/Banner/videoBanner";
import Cta from "../componet/Home/cta";
import Team from "../componet/Home/team";
import Explore from "../componet/Home/explore";
import Step from "../componet/Home/step";
import Faq from "../componet/Home/faq";
import Contact from "../componet/Home/contact";
import Footer from "../componet/Footer/footer";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Home() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallButtonVisible, setIsInstallButtonVisible] = useState(false);

  useEffect(() => {
    // Listen for the 'beforeinstallprompt' event
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the default install prompt
      e.preventDefault();
      setDeferredPrompt(e); // Store the event
      setIsInstallButtonVisible(true); // Show the install button
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null); // Clear the deferred prompt
        setIsInstallButtonVisible(false); // Hide the install button again
      });
    }
  };

  return (
    <div>
      {isInstallButtonVisible && (
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
              className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
              className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm/6 text-gray-900">
              <strong className="font-semibold">Install</strong>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="mx-2 inline size-0.5 fill-current"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              The Gateway Baptist Church app on your device for a better
              experience.
            </p>
            <button
              id="install-button"
              onClick={handleInstallClick}
              className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Install <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
          <div className="flex flex-1 justify-end">
            <button
              type="button"
              className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon aria-hidden="true" className="size-5 text-gray-900" />
            </button>
          </div>
        </div>
      )}

      <Header />
      <VideoBanner
        title="Welcome To Gateway Baptist Church."
        subtitle="... Community of Grace."
        video="3373659-hd_1920_1080_24fps"
      />
      <Cta />
      <Team />
      <Explore />
      <Step />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
