import Header from "../componet/Header/header";
export default function Page404() {
  return (
    <>
      <Header />
      <main className="grid min-h-full place-items-center bg-zinc-600 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-9xl font-black text-sky-500/100">404</p>

          <h1 className=" text-3xl font-bold tracking-tight  sm:text-4xl text-balance text-white ">
            Page not found
          </h1>

          <p className="mt-4 text-lg font-medium text-pretty text-slate-50 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>

          <div className="mt-7 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-black text-white  px-3.5 py-2.5 text-sm font-semibold  shadow-xs hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

// <div className="grid h-screen place-content-center bg-white px-4">
//   <div className="text-center">
//     <h1 className="text-9xl font-black text-gray-200">404</h1>

//     <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//       Uh-oh!
//     </p>

//     <p className="mt-4 text-gray-500">We can't find that page.</p>

//     <a
//       href="#"
//       className="mt-6 inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:ring-3 focus:outline-hidden"
//     >
//       Go Back Home
//     </a>
//   </div>
// </div>;
