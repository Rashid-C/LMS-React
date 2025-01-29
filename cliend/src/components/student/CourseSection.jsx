import { Link } from "react-router-dom";

const CourseSection = () => {
  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-800">Taught by Top Experts from</h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Explore our highly-rated courses spanning diverse fields. From coding
        and design to business and personal development, each course is
        meticulously designed to deliver measurable results and elevate your
        skills.
      </p>

      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
      >
        Explore All Courses
      </Link>
    </div>
  );
};

export default CourseSection;
