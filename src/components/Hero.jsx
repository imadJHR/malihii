"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"

export default function ModernHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  const slides = [
    {
      image: "https://arabiiandeals.com/wp-content/uploads/2024/06/Blue-White-Modern-Electronic-Product-Listing-Amazon-Product-Image-725-x-236-px-1.png",
      title: "Innovative Solutions",
      description: "Transforming ideas into reality with cutting-edge technology.",
      cta: "Explore Solutions",
    },
    {
      image: "https://arabiiandeals.com/wp-content/uploads/2024/06/Blue-White-Modern-Electronic-Product-Listing-Amazon-Product-Image-725-x-236-px-3.png",
      title: "Expert Team",
      description: "Our professionals are ready to tackle your toughest challenges.",
      cta: "Meet Our Team",
    },
  ]

  return (
    <section className="relative mt-16 h-[500px] w-full overflow-hidden">
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3"></span>`
          },
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
              <div className="absolute inset-0 flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                      >
                        <motion.h1
                          className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {slide.title}
                        </motion.h1>
                        <motion.p
                          className="mb-8 text-lg text-gray-300 sm:text-xl"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          {slide.description}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            {slide.cta}
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-white">
        <ChevronLeft className="h-8 w-8" />
      </div>
      <div className="swiper-button-next absolute right-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-white">
        <ChevronRight className="h-8 w-8" />
      </div>
    </section>
  )
}