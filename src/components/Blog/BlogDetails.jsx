import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();
  const blogsData = useLoaderData();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    const filteredData = blogsData.find((blog) => blog.id == id);
    setBlog(filteredData);
  }, [blogsData, id]);
  console.log(blog);
  if (!blog) {
    return (
      <div className="text-center mt-10 text-red-500">
        <h2>Blog not found</h2>
        <Link to="/blog" className="text-blue-600 underline">
          Back to Blog
        </Link>
      </div>
    );
  }
  return (
    <>
      {blog && (
        <div className="max-w-4xl mx-auto px-4 py-10">
          <img
            src={blog?.image}
            alt={blog?.title}
            className="rounded-xl w-full h-72 object-cover mb-6"
          />

          <h1 className="text-3xl font-bold mb-2 dark:text-white">
            {blog?.title}
          </h1>

          <div className="text-gray-500 text-sm mb-4">
            <span>By {blog?.author} · </span>
            <span>{blog?.date} · </span>
            <span>{blog?.readingTime}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {blog?.tags?.map((tag, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div
            className="prose max-w-none dark:text-white"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>

          <div className="mt-10">
            <Link
              to="/"
              className="text-secondary hover:underline dark:text-white"
            >
              ← Back to all blog posts
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogDetails;
