"use client";
import React from "react";
import PropTypes from "prop-types";
import { motion } from "motion/react";
import Link from "next/link";

const buttonVariants = {
  offscreen: {
    scale: 0,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "easeOuteaseOut",
      bounce: 0.4,
      duration: 0.4,
    },
  },
};

const variants = {
  fill: {
    white: "text-black bg-white border-base1 hover:bg-base1 hover:text-white",
    base1:
      "text-white bg-base1 border-base1 hover:bg-base1/90 hover:text-white",
  },
};

const sizes = {
  button1:
    "3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px] font-medium leading-none text-center whitespace-nowrap w-full h-[30px] lg:h-[36px] xl:h-[42px] 3xl:h-[62px] flex flex-row items-center justify-center gap-[5px] lg:gap-[10px] 3xl:gap-[14px] p-[5px] cursor-pointer rounded-[8px] border border-solid",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "button1",
  color = "white",
  ...restProps
}) => {
  return (
    <motion.button
      className={`${className} ${size && sizes[size]} ${
        variant && variants[variant]?.[color]
      } transition-background duration-300`}
      {...restProps}
      variants={buttonVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      whileTap={{ scale: 0.9 }}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </motion.button>
  );
};

const LinkButton = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "button1",
  color = "white",
  href = "/",
  ...restProps
}) => {
  return (
    <motion.div
      variants={buttonVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      whileTap={{ scale: 0.9 }}
      className="w-fit"
    >
      <Link
        className={`${className} ${size && sizes[size]} ${
          variant && variants[variant]?.[color]
        } transition-background duration-300`}
        {...restProps}
        href={href}
      >
        {!!leftIcon && leftIcon}
        {children}
        {!!rightIcon && rightIcon}
      </Link>
    </motion.div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  size: PropTypes.oneOf(["button1"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white"]),
};

export { Button, LinkButton };
