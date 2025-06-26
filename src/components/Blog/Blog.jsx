import React, { use } from "react";

const Blog = ({ blogsPromise = {} }) => {
  const blogs = use(blogsPromise);
  console.log(blogs);
  return (
    <div className="my-10">
      <section className="bg-gray-50 py-12 px-4 md:px-10 rounded">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">From Our Blog</h2>
          <p className="text-gray-600 mb-10">
            Explore hobby tips, community stories, and meetup ideas from our
            expert writers and users.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Card */}
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white shadow-md rounded overflow-hidden"
              >
                <img
                  src={blog.image}
                  alt="Blog 1"
                  className="w-full h-40 object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-semibold mb-2">{blog.title} </h3>
                  <p className="text-gray-600 mb-4">{blog.summary}</p>
                  <a
                    href="#"
                    className="text-secondary font-medium hover:underline"
                  >
                    Read More →
                  </a>
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
