const description = "Watch us Live Today";
const topic = "Experience The Power Of Worship";

export default function LiveVideo() {
  return (
    <main class="flex-grow flex flex-col space-y-5 items-center bg-stone-300 justify-center p-4">
      <h1 class="sm:text-4xl py-5 capitalize  font-bold title-font mb-4 text-black tracking-widest">
        {topic} - {description}
      </h1>
      <div class="w-full md:w-2/3 max-w-3xl mx-auto">
        <div class="relative pb-[56.25%] rounded-lg overflow-hidden">
          <iframe
            class="absolute top-0 left-0 w-full h-full"
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2Fgatewaybaptist.church.33%2Fvideos%2F1069831131850092"
            frameborder="0"
            allowfullscreen
            title="Facebook Live Video"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
