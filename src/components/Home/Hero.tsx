export default function Hero() {
  return (
    <div className="relative isolate mx-6 my-12 lg:px-8 bg-white rounded-lg overflow-hidden">
      <div className="mx-auto max-w-7xl py-24 sm:py-32 lg:py-36 flex flex-col lg:flex-row items-center relative z-10">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl pb-10">
            Quality Recycled Parts, Reliable Performance
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8">
            As Chicagoland's largest auto recycler, and with over 88 years of
            experience in the business, ABC Auto Parts is committed to offering
            the highest quality parts, fastest and friendliest service, and best
            prices.
          </p>
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 group"
            >
              Browse our inventory <span aria-hidden="true" className="inline-block transition-transform transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
        <div className="mt-10 px-5 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/outsidephoto.jpeg"
            alt=""
            className="w-full lg:max-w-none rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Additional colorful decoration */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-20 rounded-full blur-3xl transform translate-x-10 translate-y-20 z-0"
      ></div>
      <div
        aria-hidden="true"
        className="absolute -top-60 left-0 w-96 h-96 bg-accent opacity-20 rounded-full blur-3xl transform translate-x-0 translate-y-0 z-0"
      ></div>
    </div>
  );
}
