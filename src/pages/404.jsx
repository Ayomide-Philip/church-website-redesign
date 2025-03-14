import Header from "../componet/Header/header";
export default function Page404() {
  return (
    <>
      <Header />
      <main className="grid min-h-full place-items-center bg-zinc-600 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-3xl font-semibold text-sky-500/100">404</p>

          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-balance text-white  sm:text-7xl">
            Page not found
          </h1>

          <p className="mt-4 text-lg font-medium text-pretty text-violent-50 sm:text-xl/8">
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
