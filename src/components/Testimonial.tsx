import { Star } from "lucide-react";

// Our Customer Testimonial section
function Testimonial() {
  const reviews = [
    {
      avatar: "/hotel1.jpg",
      name: "Robert",
      location: "USA",
      rating: "5.0",
      text: "These websites provide a global marketplace for artists, musicians, designers, and creators of all kinds to showcase their unique creations connect with a broader audience.",
    },
    {
      avatar: "/hotel2.jpg",
      name: "Robert",
      location: "USA",
      rating: "5.0",
      text: "These websites provide a global marketplace for artists, musicians, designers, and creators of all kinds to showcase their unique creations connect with a broader audience.",
    },
    {
      avatar: "/hotel3.jpg",
      name: "Robert",
      location: "USA",
      rating: "5.0",
      text: "These websites provide a global marketplace for artists, musicians, designers, and creators of all kinds to showcase their unique creations connect with a broader audience.",
    },
    {
      avatar: "/hotel1.jpg",
      name: "Robert",
      location: "USA",
      rating: "5.0",
      text: "These websites provide a global marketplace for artists, musicians, designers, and creators of all kinds to showcase their unique creations connect with a broader audience.",
    },
    {
      avatar: "/hotel2.jpg",
      name: "Robert",
      location: "USA",
      rating: "5.0",
      text: "These websites provide a global marketplace for artists, musicians, designers, and creators of all kinds to showcase their unique creations connect with a broader audience.",
    },
    {
      avatar: "/hotel3.jpg",
      name: "Robert",
      location: "USA",
      rating: "5.0",
      text: "These websites provide a global marketplace for artists, musicians, designers, and creators of all kinds to showcase their unique creations connect with a broader audience.",
    }
  ];

  return (
    <div className="w-full  mx-auto px-6 py-16">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center mb-14">
        Our Customer <span style={{ color: "#ffaf04" }}>Testimonial</span>
      </h2>

      {/* Review cards */}
      <div className="flex flex-col md:flex-row justify-center gap-8 overflow-x-auto no-scrollbar">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="w-full md:w-[45%] bg-gray-100 rounded-2xl p-8 shadow-sm shrink-0"
          >
            {/* Stars + rating */}
            <div className="flex items-center gap-2 mb-5">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={22} fill="#ffaf04" color="#ffaf04" />
              ))}
              <span className="ml-2 font-bold text-gray-800">{review.rating}</span>
            </div>

            {/* Quote */}
            <p className="text-gray-600 mb-8 leading-relaxed">{review.text}</p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={review.avatar}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-gray-800">{review.name}</p>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
