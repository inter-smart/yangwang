"use client";
import { motion } from "motion/react";

const textVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "easeOuteaseOut",
      bounce: 0.4,
      duration: 0.4,
    },
  },
};

const sizes = {
  text1:
    "3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px] font-normal leading-normal",

  text2:
    "3xl:text-[16px] 2xl:text-[12px] xl:text-[10px] lg:text-[10px] text-[10px] font-normal leading-normal",
};

const Text = ({
  children,
  className = "",
  as,
  size,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <motion.div
      variants={textVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <Component className={`${className} ${sizes[size]} `} {...restProps}>
        {children}
      </Component>
    </motion.div>
  );
};

export { Text };
