import { Link } from "react-router";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export function BlogCard({
  id,
  title,
  excerpt,
  image,
  date,
  category,
}: BlogCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-blue-600 font-medium">{category}</span>
          <div className="flex items-center space-x-1 text-gray-500">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">{excerpt}</p>

        <Link
          to={`/blog/${id}`}
          className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
        >
          <span>Read More</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}