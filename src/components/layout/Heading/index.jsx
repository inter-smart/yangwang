"use client";
import React from "react";

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
  heading1:
    "text-[24px] lg:text-[36px] xl:text-[43px] 2xl:text-[48px] 3xl:text-[65px] font-semibold leading-tight",
  heading2:
    "text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[44px] 3xl:text-[54px] font-semibold leading-tight",
  heading3:
    "text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[26px] 3xl:text-[30px] font-semibold leading-tight",
  heading5:
    "text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[25px] font-semibold leading-tight",
  heading6:
    "text-[12px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] 3xl:text-[20px] font-semibold leading-tight",
};

const Heading = ({
  children,
  className = "",
  size = "heading6",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <motion.div
      variants={textVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <Component className={`${className} ${sizes[size]}`} {...restProps}>
        {children}
      </Component>
    </motion.div>
  );
};

export { Heading };
