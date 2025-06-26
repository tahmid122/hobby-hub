import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router";

const Banner = ({ bannerData }) => {
  return (
    <div className="md:min-h-[70vh]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper md:h-[70vh]"
      >
        {bannerData?.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto md:px-4 h-full gap-4 md:gap-8 py-8">
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
                <Link
                  to={"/groups"}
                  className="btn btn-secondary text-white px-6 py-2"
                >
                  Explore Groups
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
