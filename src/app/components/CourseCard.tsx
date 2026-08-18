import { Link } from "react-router";
import { Button } from "./ui/button";
import { Clock, Users } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  price: string;
}

export function CourseCard({
  id,
  title,
  description,
  image,
  duration,
  students,
  price,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-auto transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock size={16} className="text-blue-600" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users size={16} className="text-blue-600" />
            <span>{students}+ students</span>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="text-xl font-bold text-amber-500">{price}</div>

          <Button
            asChild
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-md"
          >
            <Link
              to={`/courses/${id}`}
              aria-label={`View details for ${title} course`}
            >
              View Course Details
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
