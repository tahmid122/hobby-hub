import React, { use } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = ({ testimonialPromise }) => {
  const testimonial = use(testimonialPromise);
  return (
    <div className="my-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 dark:text-white">
        Why People Love Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonial?.map((test) => (
          <div
            key={test.id}
            className="bg-white shadow-md border border-slate-200 rounded dark:border-none dark:shadow-sm shadow-slate-300 dark:bg-slate-900"
          >
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <div className="max-w-screen-md mx-auto">
                <div className="flex items-center justify-center mb-5 text-gray-400">
                  <FaQuoteLeft size={50} />
                </div>
                <blockquote>
                  <p className="text-base md:text-lg font-medium text-black italic dark:text-white">
                    "{test.description}"
                  </p>
                </blockquote>
                <div className="mt-3">⭐⭐⭐⭐⭐</div>
                <div className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-16 h-16 rounded-full"
                    src={test.image}
                    alt="profile picture"
                  />
                  <div className="flex items-center">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      {test.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
