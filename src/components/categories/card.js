import AppConfig from "@/config/app.config";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }) => {
  const categoryImage = category?.categoryImage !== null ? `${AppConfig.baseURL}${category?.categoryImage?.url}` : null;
  const categoryImageUrl = categoryImage || `/images/categories.png`;

  return (
    <Link
      href={`/categories/${category?.slug}`}
      className="rounded-xl p-8 transition-all duration-300 overflow-hidden bg-gray-50 border border-gray-100 shadow-sm hover:bg-gray-50 hover:shadow-2xl hover:shadow-gray-400 hover:translate-y-2"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-14 h-14 rounded-lg flex items-center justify-center mb-6">
          <Image
            src={categoryImageUrl}
            alt={category.name}
            fill
            sizes="100%"
            className="object-contain w-full"
            loading="lazy"
          />
        </div>
        <h3 className="text-xl font-semibold text-dark-600 mb-3">
          {category?.name}
        </h3>
        <p className="text-gray-600">{category?.description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
