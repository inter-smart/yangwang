import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Img } from "@/components/layout/Img";
import { LinkButton } from "@/components/layout/Button";

export default function GlobalSection() {

    return (
        <section className="w-full 3xl:py-[130px_90px] 2xl:py-[80px_50px] xl:py-[50px] py-[40px] relative after:content-[''] after:top-0 after:absolute after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)]  ">
            <Img
                src="warrantyBanner.jpg"
                alt="warrantyBanner"
                fill
                sizes="(max-width: 1920px) 100vw, 1050px"
                className="object-cover transition-transform duration-300 pointer-events-none"
            />
            <div className="container mx-auto relative z-10 h-full">
                <Heading
                    size="heading3"
                    as="h3"
                    className="text-white font-medium 2xl:mb-[25px] lg:max-w-[750px] max-w-[450px] mx-auto mb-[20px] text-center" >
                    Warranty & Service Offers
                </Heading>
                <Text
                    size="text4"
                    as="p"
                    className="capitalize text-white text-center max-w-[1400px] mx-auto ">
                    Vehicle Warranty: Typically, a 6-year or 150,000 km warranty covers the entire vehicle, ensuring peace
                    of mind for owners.Battery Warranty: An 8-year or 160,000 km warranty is provided for the high-voltage
                    battery system, reflecting BYD's confidence in its battery technology. Service Contracts:
                    In some regions, such as the Middle East, offerings include a 5-year warranty coupled with a
                    100,000 km service contract, highlighting the brand's commitment to customer satisfaction.
                </Text>
                <div className="flex flex-wrap justify-center w-fit mx-auto 3xl:mb-[430px] lg:mb-[250px] md:mb-[100px] mb-[75px]">
                    <div className="xl:px-[13px] px-[4px]">
                        <LinkButton
                            href="#"
                            aria-label="Book Test Drive"
                            className="text-white bg-black min-w-[100px] sm:min-w-[120px] xl:min-w-[140px] 3xl:min-w-[170px] mt-[35px]  hover:!bg-[#F1D1A8] hover:text-black"
                            color="black">
                            <span> Enquire Now</span>
                        </LinkButton>
                    </div>
                    <div className="xl:px-[13px] px-[4px]">
                        <LinkButton
                            href="#"
                            aria-label="Book Test Drive"
                            className="text-black bg-white min-w-[100px] sm:min-w-[120px] xl:min-w-[140px] 3xl:min-w-[170px] mt-[35px]  hover:!bg-[#F1D1A8]"
                        >
                            <span className="text-black">View More Offers</span>
                        </LinkButton>
                    </div>
                </div>
                <div className="realtive ">
                    <ul className="flex flex-wrap justify-center w-full">
                        <li className="3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px] text-white font-normal leading-normal relative px-[15px_25px] after:content-[] after:absolute after:w-[8px] after:h-[8px] after:rounded-full after:bg-white after:left-0 after:top-0 after:bottom-0 after:m-auto   ">Vehicle Warranty</li>
                        <li className="3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px] text-white font-normal leading-normal relative px-[15px_25px] after:content-[] after:absolute after:w-[8px] after:h-[8px] after:rounded-full after:bg-white after:left-0 after:top-0 after:bottom-0 after:m-auto   ">Battery Warranty</li>
                        <li className="3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px] text-white font-normal leading-normal relative px-[15px_25px] after:content-[] after:absolute after:w-[8px] after:h-[8px] after:rounded-full after:bg-white after:left-0 after:top-0 after:bottom-0 after:m-auto   ">Additional Coverage</li>
                        <li className="3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px] text-white font-normal leading-normal relative px-[15px_25px] after:content-[] after:absolute after:w-[8px] after:h-[8px] after:rounded-full after:bg-white after:left-0 after:top-0 after:bottom-0 after:m-auto   ">Dedicated Service Centers</li>
                        <li className="3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px] text-white font-normal leading-normal relative px-[15px_25px] after:content-[] after:absolute after:w-[8px] after:h-[8px] after:rounded-full after:bg-white after:left-0 after:top-0 after:bottom-0 after:m-auto   ">Global Expansion</li>
                    </ul>
                </div>
            </div>
        </section>



    );
}
