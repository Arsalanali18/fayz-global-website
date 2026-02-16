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
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-2xl font-semibold text-amber-500">{price}</span>
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Link to={`/courses/${id}`}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}