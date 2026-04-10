import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "Alex Vo",
    handle: "@alex.Paynego",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces&q=80",
    text: `"Working with SSE has been a game-changer for our projects. Their forged steel solutions are consistently high-quality, delivered on time, and tailored to our exact specifications. Reliability and precision — they truly set the industry standard."`,
    rating: 4.5,
    date: "23 Nov 2026",
  },
  {
    id: 2,
    name: "Alex Vo",
    handle: "@alex.Paynego",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces&q=80",
    text: `"Working with SSE has been a game-changer for our projects. Their forged steel solutions are consistently high-quality, delivered on time, and tailored to our exact specifications. Reliability and precision — they truly set the industry standard."`,
    rating: 4.5,
    date: "23 Nov 2026",
  },
  {
    id: 3,
    name: "Alex Vo",
    handle: "@alex.Paynego",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces&q=80",
    text: `"Working with SSE has been a game-changer for our projects. Their forged steel solutions are consistently high-quality, delivered on time, and tailored to our exact specifications. Reliability and precision — they truly set the industry standard."`,
    rating: 4.5,
    date: "23 Nov 2026",
  },
  {
    id: 4,
    name: "Alex Vo",
    handle: "@alex.Paynego",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces&q=80",
    text: `"Working with SSE has been a game-changer for our projects. Their forged steel solutions are consistently high-quality, delivered on time, and tailored to our exact specifications. Reliability and precision — they truly set the industry standard."`,
    rating: 4.5,
    date: "23 Nov 2026",
  },
];

export default function ReusableCarousel() {
  return (
    <div className="w-full  py-12 md:px-20 px-4 bg-gray-50/30">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper !pb-16 max-w-8xl  mx-auto"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="h-auto">
            <div className="bg-white rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50 text-left flex flex-col justify-between h-full relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]">
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-5 text-[#F97316] text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-400 text-[15px] leading-relaxed tracking-wide font-light mb-3">
                  {testimonial.text}
                </p>
                
                {/* Show more button */}
                <button className="text-[#A26034] text-sm font-semibold hover:text-[#8b4d24] transition-colors mb-8">
                  Show more
                </button>
              </div>
              
              {/* User Info */}
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-11 h-11 rounded-full object-cover border border-gray-100 shadow-sm" 
                />
                <div>
                  <h4 className="text-slate-800 font-bold text-sm tracking-wide">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs font-light">{testimonial.handle}</p>
                </div>
              </div>
              
              {/* Date */}
              <span className="absolute bottom-6 right-8 text-gray-200/80 text-xs font-light tracking-wider">
                {testimonial.date}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
