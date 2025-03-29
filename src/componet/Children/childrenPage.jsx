export default function ChildrenPage() {
  return (
    <div class="overflow-hidden bg-white py-10 sm:py-10">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pt-4 lg:pr-8">
            <div class="lg:max-w-lg">
              <h2 class="text-base/7 font-semibold text-indigo-600">WELCOME</h2>
              <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Welcome to Our Children’s Ministry!
              </p>
              <p class="mt-6 text-lg/8 text-gray-600">
                We are so excited to partner with you in helping your children
                grow in their faith and discover the love of Jesus! Our
                Children’s Ministry is a place where kids can have fun, build
                lasting friendships, and learn about God’s Word in a safe,
                loving environment. With engaging activities, age-appropriate
                lessons, and passionate leaders, we aim to inspire the next
                generation to live with purpose and faith. We look forward to
                seeing your child thrive as they embark on this exciting journey
                with us!
              </p>
            </div>
          </div>
          <img
            src="/images/childrenWelcome.jpg"
            alt="Product screenshot"
            class="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </div>
  );
}
