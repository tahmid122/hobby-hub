import React, { Suspense } from "react";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router";
import Groups from "../../components/Groups/Groups";
import Categories from "../../components/Categories/Categories";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Testimonial from "../../components/Testimonial/Testimonial";
import Approach from "../../components/Approach/Approach";
import Blog from "../../components/Blog/Blog";
const categoriesPromise = fetch("/categories.json").then((res) => res.json());
const testimonialPromise = fetch("/testimonial.json").then((res) => res.json());
const blogsPromise = fetch("/blog.json").then((res) => res.json());

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="w-11/12 mx-auto p-2">
      <Banner bannerData={data} />
      <Groups />
      <Suspense fallback={<LoadingSpinner />}>
        <Categories categoriesPromise={categoriesPromise} />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonial testimonialPromise={testimonialPromise} />
      </Suspense>
      <Approach />
      <Suspense fallback={<LoadingSpinner />}>
        <Blog blogsPromise={blogsPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
