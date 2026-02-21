import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeedBackSection = () => {
  const [feedbackRating, setFeedbackRating] = useState(null);

  return (
    <section className="py-14  md:px-20 px-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 md:gap-12 gap-20 items-center">
        {/* Woman photo + emoji */}
        <div className="relative md:order-1 order-2 flex justify-center">
          <div className="relative rounded-br-[30px] rounded-bl-[80px] rounded-tl-[30px] rounded-tr-[100px] bg-linear-to-br to-[#EFD0AB] via-[#EFD0AB] from-[#f3e2cfd8] w-60 h-70">
            <img
              src="https://i.pinimg.com/originals/cb/f3/6b/cbf36b267471d30a6f1f56c1719f1836.png"
              alt="Happy customer"
              className="w-64 h-80 absolute bottom-4  scale-y-110 scale-x-150 bg-cover rounded-3xl"
            />
            <div className="absolute bottom-6 right-0 translate-x-1/3 bg-white rounded-2xl shadow-xl px-4 py-3">
              <p className="text-xs text-gray-500 mb-2 font-semibold">
                How your experience?
              </p>
              <div className="flex gap-2 text-2xl">
                {["😞", "😐", "🙂", "🤩"].map((emoji, i) => (
                  <button
                    key={i}
                    onClick={() => setFeedbackRating(i)}
                    className={`text-3xl transition-transform hover:scale-125 ${
                      feedbackRating === i ? "scale-125" : ""
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="order-2 md:order-1">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
            Leave feedback
          </p>
          <h2 className="text-3xl font-black mb-3">
            Share your opinion with us
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            What would you like to see on our website and in the restaurant?
          </p>
          <Link
            to={"/feedback"}
            className="BoxColors text-white font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-[#dcc898] transition-colors mb-8"
          >
            LEAVE FEEDBACK
          </Link>

          <div className="flex mt-10 items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/40?img=${i + 10}`}
                  alt="Customer"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <p className="text-lg text-gray-600 font-semibold">
                Our Happy Customers
              </p>
              <p className="text-xs flex gap-2 font-semibold items-center text-gray-700 mt-2">
                <FaStar /> 4.8 · (114 reviews)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBackSection;
