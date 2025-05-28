import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import { Text } from "@/components/layout/Text";
import Link from "next/link";

const offersInfo = [
  {
    image: "offers-1.jpg",
    alt: "Yangwang",
    model: "Yangwang U8",
    title: "Luxury Off-Road SUV",
    warranty: "Vehicle Warranty",
    description:
      "6 years or 150,000 kilometers, covering the entire vehicle. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    offersList: [
      {
        title: "Offer Period 09.03.2025 to 08.06.2025",
      },
      {
        title:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
      },
      {
        title:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      },
      {
        title: "Et harum quidem rerum facilis est et expedita distinctio",
      },
      {
        title:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      },
      {
        title: "Et harum quidem rerum facilis est et expedita distinctio",
      },
    ],
  },
  {
    image: "offers-2.jpg",
    alt: "Yangwang",
    model: "Yangwang U8",
    title: "Luxury Off-Road SUV",
    warranty: "Vehicle Warranty",
    description:
      "6 years or 150,000 kilometers, covering the entire vehicle. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    offersList: [
      {
        title: "Offer Period 09.03.2025 to 08.06.2025",
      },
      {
        title:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
      },
      {
        title:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      },
      {
        title: "Et harum quidem rerum facilis est et expedita distinctio",
      },
      {
        title:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      },
      {
        title: "Et harum quidem rerum facilis est et expedita distinctio",
      },
    ],
  },
];

export default function OfferInfoSection() {
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[40px_30px] lg:py-[60px_40px] xl:py-[110px_0] 2xl:py-[130px_0]">
      <div className="container">
        <div className="text-center lg:max-w-[768px] xl:max-w-[880px] 2xl:max-w-[1160px] 3xl:max-w-[1330px] mx-auto mb-[30px] lg:mb-[40px] xl:mb-[70px] 2xl:mb-[90px] 3xl:mb-[120px]">
          <Heading
            size="heading3"
            as="h3"
            className="leading-tight !font-bold text-center text-black mb-[20px] xl:mb-[30px] 2xl:mb-[50px] 3xl:mb-[60px]"
          >
            As of May 2025, BYD's luxury sub-brand Yangwang offers comprehensive
            warranty packages for its high-end electric vehicles, ensuring peace
            of mind for owners. Here's an overview of the warranty coverage for
            each model:
          </Heading>
          <Text size="text1" as="p" className="text-black">
            Dedicated Service Centers: The brand inaugurated its first flagship
            Yangwang Center in Shanghai, providing a one-stop solution
            encompassing sales, delivery, technical support, and after-sales
            services. The center features amenities like customer lounges,
            libraries, and children's play areas to enhance the customer
            experience. Global Expansion: While Yangwang's primary market is
            China, BYD has been expanding its global footprint. For instance, in
            Turkey, BYD partnered with ALJ Turkey to establish a dealer network
            offering localized sales and after-sales services.
          </Text>
        </div>
      </div>
      {offersInfo?.map((item, index) => (
        <div
          key={`offers-${index}`}
          className={`flex flex-wrap ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="w-full lg:w-1/2">
            <div className="w-full h-full overflow-hidden relative z-0">
              <Img
                src={item.image}
                alt={item.alt}
                fill
                sizes="900px"
                className="object-cover -z-1 transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div
              className={`w-full h-full p-[30px_40px] xl:p-[60px_80px] 2xl:p-[75px_100px] 3xl:p-[90px_120px] ${
                index % 2 === 0
                  ? "bg-[#5949a7] ltr:pr-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] ltr:3xs:pr-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] ltr:2xs:pr-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] ltr:xs:pr-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] ltr:sm:pr-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] ltr:md:pr-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] ltr:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] rtl:pl-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] rtl:3xs:pl-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] rtl:2xs:pl-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] rtl:xs:pl-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] rtl:sm:pl-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] rtl:md:pl-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] rtl:lg:pl-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:pl-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:pl-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:pl-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))]"
                  : "bg-[#262626] ltr:pl-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] ltr:3xs:pl-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] ltr:2xs:pl-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] ltr:xs:pl-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] ltr:sm:pl-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] ltr:md:pl-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] ltr:lg:pl-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:pl-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:pl-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:pl-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] rtl:pr-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] rtl:3xs:pr-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] rtl:2xs:pr-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] rtl:xs:pr-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] rtl:sm:pr-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] rtl:md:pr-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] rtl:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))]"
              }`}
            >
              <Heading
                size="heading3"
                as="h3"
                className="text-white mb-[2px] xl:mb-[4px] 2xl:mb-[6px] 3xl:mb-[10px]"
              >
                {item.model}
              </Heading>
              <Heading
                size="heading3"
                as="h3"
                className="text-white mb-[10px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]"
              >
                {item.title}
              </Heading>
              <Text
                size="text1"
                as="p"
                className="text-base1 mb-[4px] xl:mb-[6px] 3xl:mb-[10px]"
              >
                <b> {item.warranty}</b>
              </Text>
              <Text
                size="text1"
                as="p"
                className="font-medium text-white mb-[4px] xl:mb-[6px] 3xl:mb-[10px]"
              >
                {item.description}
              </Text>
              <ul className="mb-[20px] xl:mb-[30px] 3xl:mb-[40px]">
                {item.offersList?.map((offer, index) => (
                  <li
                    key={`offersInfo-${index}`}
                    className="my-[10px] xl:my-[15px] 3xl:my-[25px] ltr:pl-[20px] ltr:xl:pl-[30px] ltr:2xl:pl-[40px] ltr:3xl:pl-[50px] last:mb-0 relative z-0 before:content-[''] before:block before:w-[15px] before:xl:w-[20px] before:2xl:w-[25px] before:3xl:w-[30px] before:aspect-square before:absolute before:z-0 before:left-0 before:-top-[2px] before:xl:-top-[5px] before:3xl:-top-[7px] before:bg-[url(/images/offer-list-icon.svg)] before:bg-center before:bg-contain"
                  >
                    <Heading size="heading6" as="h6" className="text-white">
                      {offer.title}
                    </Heading>
                  </li>
                ))}
              </ul>
              <LinkButton
                href="#"
                aria-label="Enquire Now"
                color="black"
                className="min-w-[80px] sm:min-w-[100px] xl:min-w-[127px] 2xl:min-w-[146px] 3xl:min-w-[167px]"
              >
                Enquire Now
              </LinkButton>
              <Text
                size="text4"
                as="p"
                className="text-white mt-[15px] xl:mt-[20px] 2xl:mt-[30px]"
              >
                <Link href={"#"}>*Terms and Conditions Apply</Link>
              </Text>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
