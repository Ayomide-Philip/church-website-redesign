const teenagerGallaryImages = [
  "IMG-10.04.31_fc165bf9",
  "IMG-20240714-WA0012",
  "IMG-20240714-WA0013",
  "IMG-20240714-WA0015",
  "IMG-20240714-WA0016",
  "IMG-20240714-WA0018",
  "IMG-20240714-WA0019",
  "IMG-20240714-WA0020",
  "IMG-20240714-WA0021",
  "IMG-20240714-WA0022",
  "IMG-20240714-WA0023",
  "IMG-20240714-WA0024",
];

export default function TeenagerGallary() {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {teenagerGallaryImages.map((images) => {
        return (
          <div class="group cursor-pointer relative aspect-w-16 aspect-h-9">
            <img
              src={`/images/Teenagers/${images}.jpg`}
              alt={`${images}`}
              class="w-full h-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
        );
      })}
    </div>
  );
}
