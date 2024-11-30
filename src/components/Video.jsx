import React from "react";

const Video = () => {
  return (
    
      <div className="bg-[#ffffff05] mx-[6%] p-8 flex justify-center items-center rounded-xl max-sm:p-4 startplace1">
        <div
          className="max-sm:h-20 max-sm:hidden"
          style={{width: "1143px", height: "640px"}}
        >
          <div style={{width: "100%", height: "100%"}}>
            <iframe
              frameborder="0"
              allowfullscreen=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              title="MZ Media Launch Video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/GG2be1MKOik?autoplay=0&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Fmzmedia.digital&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"
              id="widget2"
            ></iframe>
          </div>
        </div>
        <div
          className="max-sm:h-20 hidden max-sm:block"
          style={{width: "400px", height: "200px"}}
        >
          <div style={{width: "100%", height: "100%"}}>
            <iframe
              frameborder="0"
              allowfullscreen=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              title="MZ Media Launch Video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/GG2be1MKOik?autoplay=0&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Fmzmedia.digital&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=3"
              id="widget4"
            ></iframe>
          </div>
        </div>
      </div>
  );
};

export default Video;
