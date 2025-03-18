import Footer from "../componet/Footer/footer";
import Header from "../componet/Header/header";

export default function JoinUs() {
  return (
    <>
      <Header title="Join Us" />
      <main class="flex-grow flex flex-col space-y-5 items-center bg-stone-300 justify-center p-4">
        <video
          id="videoPlayer"
          class="w-full md:w-2/3 max-w-3xl mx-auto rounded-lg"
          controls
        ></video>
      </main>
      <Footer />
    </>
  );
}
