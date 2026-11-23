import { Eye, Calendar } from "lucide-react";

// Our Latest Blog & News section
function Cards() {
  const blogs = [
    {
      img: "/hotel1.jpg",
      title: "The Ultimate Guide to Finding Best hotel Deals",
      views: "1K",
      date: "12 Jan 2024",
    },
    {
      img: "/hotel2.jpg",
      title: "The Benefit of Early Hotel Reservation",
      views: "1K",
      date: "12 Jan 2024",
    },
    {
      img: "/hotel3.jpg",
      title: "The Art of Picking the Hotel Location for you",
      views: "1K",
      date: "12 Jan 2024",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center mb-14">
        Our Latsest <span style={{ color: "#ffaf04" }}>Blog &amp; News</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-6 justify-items-center">
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className="w-full md:w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <img src={blog.img} className="w-full h-52 object-cover" />
            <div className="p-5">
              <span className="inline-block bg-yellow-400 text-white text-sm font-semibold rounded-full px-4 py-1 mb-4">
                Hotel Booking
              </span>
              <h3 className="text-lg font-bold text-gray-800 mb-4">{blog.title}</h3>
              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <span className="flex items-center gap-2">
                  <Eye size={18} /> {blog.views}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={18} /> {blog.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
