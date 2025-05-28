"use client";
import Countdown from "react-countdown";
import { Heading } from "../layout/Heading";
import { Text } from "../layout/Text";
import { useEffect, useState } from "react";

export default function CountDown({ date }) {
  const [clientReady, setClientReady] = useState(false);

  const countdownStyle =
    "text-center w-[60px] xl:w-[80px] 2xl:w-[100px] 2xl:w-[100px] 3xl:w-[115px] aspect-square bg-white/10 border-[1px] border-[#5d5862] backdrop-blur-2xl flex items-center justify-center transition-background duration-300 hover:bg-white/20";

  const completionist = (
    <span className="text-green-600 font-bold">You are good to go!</span>
  );

  useEffect(() => {
    setClientReady(true);
  }, []);

  if (!clientReady) return null;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return completionist;
    } else {
      return (
        <div className="flex gap-[5px] xl:gap-[7px] 3xl:gap-[10px]">
          <div className={countdownStyle}>
            <div>
              <Heading
                size="heading3"
                as="h3"
                className="leading-none text-white mb-[2px] xl:mb-[4px] 3xl:mb-[6px]"
              >
                {String(days).padStart(2, "0")}
              </Heading>
              <Text size="text2" as="p" className="capitalize text-white">
                days
              </Text>
            </div>
          </div>
          <div className={countdownStyle}>
            <div>
              <Heading
                size="heading3"
                as="h3"
                className="leading-none text-white mb-[2px] xl:mb-[4px] 3xl:mb-[6px]"
              >
                {String(hours).padStart(2, "0")}
              </Heading>
              <Text size="text2" as="p" className="capitalize text-white">
                hours
              </Text>
            </div>
          </div>
          <div className={countdownStyle}>
            <div>
              <Heading
                size="heading3"
                as="h3"
                className="leading-none text-white mb-[2px] xl:mb-[4px] 3xl:mb-[6px]"
              >
                {String(minutes).padStart(2, "0")}
              </Heading>
              <Text size="text2" as="p" className="capitalize text-white">
                minutes
              </Text>
            </div>
          </div>
          <div className={countdownStyle}>
            <div>
              <Heading
                size="heading3"
                as="h3"
                className="leading-none text-white mb-[2px] xl:mb-[4px] 3xl:mb-[6px]"
              >
                {String(seconds).padStart(2, "0")}
              </Heading>
              <Text size="text2" as="p" className="capitalize text-white">
                seconds
              </Text>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Countdown date={new Date(date)} renderer={renderer} />
    </div>
  );
}
