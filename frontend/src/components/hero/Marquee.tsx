import { motion } from "framer-motion";

export default function Marquee() {
  const text =
    "Currently on Beta - Rest of the Features & Functionalities Coming Soon - ";

  return (
    <div className="relative overflow-hidden bg-blue-600 text-white px-6 py-2 rounded-full max-w-[480px]">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-blue-600 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-blue-600 to-transparent z-10"></div>

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 4,
            ease: "linear",
          },
        }}
      >
        {/* Repeat the text multiple times, no margin */}
        {[...Array(4)].map((_, i) => (
          <span key={i} className="flex-shrink-0">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
