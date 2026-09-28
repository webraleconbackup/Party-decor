import React from "react";
import { motion } from "framer-motion";

const ServiceBanner = ({title, subtitle }) => {

  return (
    <section className="relative w-full overflow-hidden bg-[#3E2A67] mt-36 lg:mt-30">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            flex flex-col items-center justify-center text-center
            min-h-[220px]
            sm:min-h-[260px]
            md:min-h-[300px]
            lg:min-h-[340px]
            py-10 sm:py-14
          "
        >

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="
              text-pink-500 font-extrabold tracking-tight
              text-2xl
              sm:text-2xl
              md:text-3xl
              lg:text-6xl
              leading-tight
              drop-shadow-lg
            "
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="
              mt-3
              max-w-3xl
              text-white/90
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              font-medium
              leading-relaxed
              px-2
            "
          >
            {subtitle}
          </motion.p>

          {/* Bottom Accent */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "140px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-7 h-[4px] bg-gradient-to-r from-pink-400 to-purple-300 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceBanner;