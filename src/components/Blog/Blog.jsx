import React, { use } from "react";
import { Link } from "react-router";
import Title from "../Title/Title";

const Blog = ({ blogsPromise = {} }) => {
  const blogs = use(blogsPromise);
  return (
    <div className="my-10">
      <section className="bg-gray-50 py-12 px-4 md:px-10 rounded dark:bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <Title title={"From Our Blog"} />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {/* Blog Card */}
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white shadow-md rounded overflow-hidden dark:shadow-sm dark:shadow-slate-300 dark:text-white dark:bg-slate-900"
              >
                <img
                  src={blog.image}
                  alt="Blog 1"
                  className="w-full h-40 object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-semibold mb-2">{blog.title} </h3>
                  <p className="text-gray-600 mb-4 dark:text-white">
                    {blog.summary}
                  </p>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-secondary font-medium hover:underline dark:text-white"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}

            {/* Add more cards here (2–3) */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
