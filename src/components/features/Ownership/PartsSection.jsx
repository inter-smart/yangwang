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
export default function PartsSection({ }) {
    return (
        <section className="w-full flex items-end relative z-0">
            <div className="lg:pl-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] xl:pl-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] 2xl:pl-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] 3xl:pl-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] w-full h-full">
                <div className="flex flex-wrap">
                    <div className="w-[calc(100%-50vw)] 2xl:px-[50px_75px] xl:px-[20px_45px] px-[15px_25px] py-[40px]">
                        <div className="h-full flex flex-wrap items-center">
                            <div className="h-fit w-full">
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
                                <div className="w-full flex flex-wrap justify-between -m-[5px] 2xl:mt-[60px] mt-[30px]">
                                    <div className="p-[5px]">
                                        <LinkButton
                                            href="#"
                                            aria-label="Book Test Drive"
                                            className="min-w-[70px] sm:min-w-[90px] xl:min-w-[95px] 3xl:min-w-[145px] hover:!bg-[#F1D1A8] hover:!border-none"
                                            color="black"
                                        >
                                            Enquire Now
                                        </LinkButton>
                                    </div>
                                    <div className="w-fit p-[5px]">
                                        <div className="flex">
                                            <div className="2xl:w-[26px] w-[20px] h-fit flex item-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                                                    <path d="M12.9204 1.77563C16.8107 1.77563 19.9648 5.05097 19.9648 9.092C19.9648 11.3728 16.9966 16.1368 14.7577 19.7987C14.0234 21 13.3673 22.0826 12.9204 22.92C12.4882 22.1111 11.8352 21.0253 11.0984 19.8071C8.87109 16.1268 5.875 11.2341 5.875 9.092C5.875 5.05097 9.02902 1.77563 12.9204 1.77563ZM16.0678 8.8162C16.0678 7.01479 14.6541 5.54614 12.9204 5.54614C11.1857 5.54614 9.77195 7.01479 9.77195 8.8162C9.77195 10.6166 11.1857 12.0847 12.9204 12.0847C14.6541 12.0847 16.0678 10.6166 16.0678 8.8162Z" fill="#5949A7" />
                                                </svg>
                                            </div>
                                            <div className="2xl:pl-[8px] pl-[5px]">
                                                <div className="text-[#1F1D1D] text-[13px] 2xl:text-[18px] font-bold not-italic leading-none capitalize mb-[6px]">
                                                    Muscat Showroom
                                                </div>
                                                <div className="text-[#1F1D1D] 2xl:text-[16px] text-[11px] font-normal not-italic leading-[22px] capitalize mb-[6px]">
                                                    PO Box 3168, Ruwi,Postal Code 112, Sultanate of Oman.
                                                </div>
                                                <div className="flex flex-wrap -my-[4px] -mx-[8px]">
                                                    <div className="flex text-[#1F1D1D] 2xl:text-[16px] text-[11px] font-medium leading-none px-[8px] py-[4px] relative after:content-[''] after:absolute after:right-0 after:top-0 after:m-auto after:w-[2px] after:h-full after:bg-[#F1D1A8]">Email:
                                                        <a href="mailto:info@Yangwang.com" className="flex ml-[5px] duration-500 ease-in-out hover:text-[#5949A7]"> info@Yangwang.com</a>
                                                    </div>
                                                    <div className="flex text-[#1F1D1D] 2xl:text-[16px] text-[11px] font-medium leading-none px-[8px] py-[4px]">Phone:
                                                        <a href="tel:+968 24578000" className="flex ml-[5px] duration-500 ease-in-out hover:text-[#5949A7]"> +968 24578000</a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-[50vw] group overflow-hidden relative z-0">
                        <Img
                            src="part.jpg"
                            alt="part_img"
                            fill
                            sizes="970px"
                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
