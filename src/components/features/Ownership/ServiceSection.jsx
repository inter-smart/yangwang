import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Img } from "@/components/layout/Img";

const slides = [
    {
        icon: "serv01.svg",
        alt: "value-1",
        serviceTle: "VIP support",
    },
    {
        icon: "serv02.svg",
        alt: "value-2",
        serviceTle: "dedicated relationship manager",
    },
    {
        icon: "serv03.svg",
        alt: "value-3",
        serviceTle: "quality Assured",
    },
];
export default function ServiceSection({ }) {
    return (
        <section className="w-full flex items-end relative z-0">
            <div className="lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] 2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] 3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))]">
                <div className="flex flex-wrap max-md:flex-col-reverse">
                    <div className="md:w-[50vw] w-[100vw] max-md:min-h-[300px] group overflow-hidden relative z-0">
                        <Img
                            src="ownerService.jpg"
                            alt="model-u9"
                            fill
                            sizes="970px"
                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                    </div>
                    <div className="md:w-[calc(100%-50vw)] w-[100vw] 3xl:pl-[75px] 2xl:pl-[65px] xl:pl-[45px] pl-[25px] py-[40px]">
                        <div className="w-full h-full flex items-center">
                            <div className="">
                                <Heading
                                    size="heading3"
                                    as="h3"
                                    className="capitalize text-black 2xl:mb-[35px] mb-[20px]"
                                >
                                    Yangwang Service
                                </Heading>
                                <Text
                                    size="text4"
                                    as="p"
                                    className="capitalize text-black">
                                    bgfnb It is said in "The Book of Rites: The Doctrine of the Mean": "So a gentleman respects morality and studies the way of learning. He seeks to be broad-minded and meticulous. He is extremely wise and follows the doctrine of the mean." Yangwang Auto After-sales Service adheres to the original intention of sincerity, seeks to be broad-minded and meticulous, and is committed to bringing the ultimate service experience to users.
                                </Text>
                                <div className="w-full 2xl:mt-[40px] mt-[24px]">
                                    <div className="relative z-1 flex flex-wrap items-center -my-[5px] 2xl:-my-[8px] -mx-[10px] 3xl:-mx-[13px]">
                                        {slides?.map((item, index) => (
                                            <div key={index} className="w-full sm:w-1/2 xl:w-1/3 py-[5px] 2xl:py-[8px] px-[10px] 3xl:px-[13px]">
                                                <ServiceBx item={item} />
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                <div className="w-full flex flex-wrap items-center justify-between -m-[5px] 2xl:mt-[60px] mt-[35px]">
                                    <div className="p-[5px]">
                                    <LinkButton
                                        href="#"
                                        aria-label="Book Test Drive"
                                        className="min-w-[70px] sm:min-w-[90px] xl:min-w-[120px] 3xl:min-w-[145px] hover:!bg-[#F1D1A8] hover:!border-none"
                                        color="black"
                                    >
                                        Book Service
                                    </LinkButton>
                                    </div>
                                    <Text
                                        size="text4"
                                        as="p"
                                        className="capitalize text-center text-black p-[5px]"
                                    >
                                        24-hour customer service hotline:
                                        <a href="tel: 400-039-6666" className="3xl:text-[18px] 2xl:text-[16px] xl:text-[12px] text-[12px] text-[#5949A7] underline font-medium not-italic leading-none"> 400-039-6666</a>
                                    </Text>
                                    {/* <div className="text-black text-[18px] font-medium leading-none">
                                    <div>24-hour customer service hotline:
                                        <a href="tel: 400-039-6666" className="text-[#5949A7] underline text-[18px] font-medium not-italic leading-none"> 400-039-6666</a>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
function ServiceBx({ item }) {
    return (
        <div className="w-full h-fit">
            <div className="flex items-center">
                <div className="group 2xl:w-[50px] xl:w-[30px] w-[20px] 2xl:h-[50px] xl:h-[30px] h-[20px] 2xl:aspect-50/50 aspect-30/30">
                    <Img
                        src={item.icon}
                        alt={item.alt}
                        width={50}
                        height={50}
                        className="w-full h-full object-contain transition-transform duration-600 group-hover:scale-[1.05]"
                    />
                </div>
                <div className="text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[18px] leading-[1.4] 2xl:font-normal font-medium text-[#151515] 2xl:w-[calc(100%-50px)] xl:w-[calc(100%-30px)] w-[calc(100%-20px)] pl-[10px] 2xl:pl-[15px]">
                    {item.serviceTle}
                </div>
            </div>
        </div>
    );
}
