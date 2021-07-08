import React from "react";
import "./Style.css";

export default function About() {
  return (
    <div>
      <div className="bg-white pt-5">
        <h1
          className="text-5xl mt-10 text-center font-bold btn-color "
          id="about"
        >
          About
        </h1>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
          {/* lg:flex lg:items-center lg:justify-between */}
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <h5 className=" mb-5 ">WHY US??</h5>
            <span className="text-2xl my-3   max-w-lg tracking-wide span-about text-center" style={{display: "flex", width: "100%", }}>
              Loud Entertainment is DJ company that has provided professional
              and quality DJ entertainment services since 2010. At “Live Out Ur
              Dreams “ We specialize in making each event a spectacular one that
              both the host and guests will remember. Our goal during each event
              is to get people out of their seats and on to the dance floor. We
              specialize in all events and parties including birthdays parties,
              sweet sixteens , baby showers, retirement parties , cooperate
              events and weddings. . We also provide services such as Master of
              Ceremony, up lighting , party favors and a photo booth. When you
              book LOUD Entertainment you can expect only the best for your
              event. Our DJ, Dj Jvee has 15 years plus experience in beat
              matching techniques, creating smooth blends to keep the dance
              floor moving. We work with each client to build a customized
              playlist , and we are able to help create the precise ambiance for
              your event. We pride ourselves on our communication and
              transparency. Our main goal is to provided a memorable event!
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
