import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const Banner = ({ bannerData }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex dark:text-white">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper h-[calc(100vh-100px)]"
      >
        {bannerData?.map((banner) => (
          <SwiperSlide key={banner.id}>
            {/* <div className="flex flex-col lg:flex-row items-center  justify-center lg:justify-around gap-6 w-full md:w-10/12 mx-auto h-full p-0"> */}
            <div className="md:gap-6 w-full md:w-10/12 mx-auto h-full p-0 grid grid-cols-1 lg:grid-cols-12 place-items-center">
              <div className="w-full lg:w-auto p-2 col-span-6">
                <img
                  className=" rounded-xl lg:rounded-2xl h-[250px]  sm:h-[450px] object-cover lg:object-contain w-full  lg:w-[500px] drop-shadow-lg drop-shadow-[#de2a8a] md:drop-shadow-xl md:drop-shadow-[#de2a8a] lg:hover:skew-6 lg:hover:-rotate-x-6 transition-all duration-500"
                  src={banner.img}
                  alt=""
                />
              </div>
              <div className="border-l-8 border-[#de2a8a] col-span-6">
                <div className="ml-5 space-y-3">
                  <h2 className="text-3xl lg:text-4xl font-bold">
                    {banner.title}
                  </h2>
                  <p className="text-lg font-light dark:text-white">
                    {banner.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
