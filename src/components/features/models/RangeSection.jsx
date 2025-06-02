import { Heading } from "lucide-react";
import Head from "next/head";
import Image from "next/image";

export default function RangeSection() {
  return (
    <section className="w-full h-auto block">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div>
            <Image
              src="/images/model-range-u8.png"
              alt="model-range-u8"
              width={590}
              height={590}
            />
          </div>
          <div>
            <Heading size="heading3" as="h3" className="text-white">
              Go the Distance on a Single Charge
            </Heading>
            <Image
              src="/images/model-u8-range-1.png"
              alt="model-u8-range-1"
              width={608}
              height={305}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
