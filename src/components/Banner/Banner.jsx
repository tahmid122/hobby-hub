import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Banner = ({ bannerData }) => {
  return (
    <div className="min-h-[70vh]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper h-[70vh]"
      >
        {bannerData?.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto px-4 h-full gap-8 py-8">
              {/* Image Section */}
              <div className="flex justify-center">
                <img
                  src={banner.img}
                  alt={banner.title}
                  className="rounded-xl max-h-[300px] md:max-h-[400px] object-cover w-full lg:w-[500px] shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text Section */}
              <div className="space-y-5 text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-bold text-[#392467] dark:text-white">
                  {banner.title}
                </h2>
                <p className="text-lg dark:text-gray-300">
                  {banner.description}
                </p>
                <button className="btn btn-secondary text-white px-6 py-2">
                  Explore Groups
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
