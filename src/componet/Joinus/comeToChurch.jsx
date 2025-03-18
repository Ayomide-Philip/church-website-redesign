export default function ComeToChurch() {
  return (
    <>
      {" "}
      <h2 className="text-gray-900 text-4xl  mt-7 mb-1 font-medium title-font">
        Do you want to Worship with us?
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Use this map to find our church and join us for a life-changing
        encounter. Come and experience the Lord in multiple dimensions of grace,
        power, and divine presence!
      </p>
      <section className="text-gray-600 body-font relative w-full h-[600px] md:h-[700px] lg:h-[800px]">
        <div className="absolute inset-0 bg-gray-300 h-full">
          <iframe
            className="w-full h-full"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.4042328308647!2d3.893266975001243!3d7.42043619259002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d2469bd9aa7%3A0xed55e2fa30d60b64!2sGateway%20Baptist%20Church%2C%20Sango%2C%20Ibadan!5e0!3m2!1sen!2sng!4v1742063925651!5m2!1sen!2sng"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          {/* <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Do you want to Worship with us?
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Use this map to find our church and join us for a life-changing
            encounter. Come and experience the Lord in multiple dimensions of
            grace, power, and divine presence!
          </p>
        </div> */}
        </div>
      </section>
    </>
  );
}
