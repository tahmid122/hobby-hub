import React, { use } from "react";
import { Link } from "react-router";
import Title from "../Title/Title";

const Categories = ({ categoriesPromise }) => {
  const categories = use(categoriesPromise);
  return (
    <div className="my-20 dark:text-white">
      <Title title={"Popular Communities"} />
      <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-6 gap-3">
        {categories?.map((category) => (
          <Link
            to={`/category/${category.title}`}
            key={category.id}
            className="text-center rounded p-3 flex items-center justify-center flex-col  space-y-3 hover:bg-gray-50 dark:hover:bg-slate-900 dark:border-none dark:shadow-sm dark:shadow-slate-400"
          >
            <span className="text-5xl block">{category.icon}</span>
            <p className="text-lg font-bold underline">{category.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
