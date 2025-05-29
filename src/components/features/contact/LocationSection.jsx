
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Img } from "@/components/layout/Img";
import LocationMap from "../../common/LocationMap";

export default function LocationSection({ variant }) {
    const hasVariantService = variant === "findshowroom";
    const tabs = [
        {
            key: "showroom",
            label: "Find a showroom",
            icon: "carIcon.svg",
            width: "w-[35px] md:w-[50px]",
            height: "h-[35px] md:h-[50px]",
            show: true,
        },
        {
            key: "service",
            label: "Find a service centre",
            icon: "serviceIcon.svg",
            width: "w-[20px] md:w-[30px]",
            height: "h-[20px] md:h-[30px]",
            show: hasVariantService, // conditionally render this
        },
    ];
    return (
        <section className="w-full block bg-[#1D0A44] 3xl:py-[100px] 2xl:py-[80px] py-[40px]">


            <div className="container">
                {/* <LocationMap /> */}
                <Tabs defaultValue="showroom" className="w-full">
                    <TabsList className="md:w-[calc(100%-300px)] xl:w-[calc(100%-350px)] 2xl:w-[calc(100%-500px)] 3xl:w-[calc(100%-580px)] flex justify-between items-center ml-auto border-b border-gray-200 relative w-full p-[0] rounded-0 2xl:mb-[60px] xl:mb-[40px] mb-[30px]">
                        {tabs.map(
                            (tab) =>
                                tab.show && (
                                    <TabsTrigger
                                        key={tab.key}
                                        value={tab.key}
                                        className="relative text-white font-medium outline-none shadow-none
                                        text-[11px] sm-text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] text-left h-full pb-[20px]
                                        after:content-[''] after:absolute after:bottom-[-4px] after:left-[-1px] after:w-[350px] after:h-[5px] after:bg-transparent
                                        data-[state=active]:after:bg-[#5949A7] data-[state=active]:shadow-none transition-all justify-start rounded-0 cursor-pointer"
                                    >
                                        <div className={`${tab.width} ${tab.height} flex relative`}>
                                            <Img
                                                src={tab.icon}
                                                alt={tab.label}
                                                fill
                                                sizes="(max-width: 50px)"
                                                className="object-contain transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <span className="px-[10px]">{tab.label}</span>
                                    </TabsTrigger>
                                )
                        )}
                    </TabsList>

                    <TabsContent value="showroom" className="w-full">
                        <LocationMap />
                    </TabsContent>
                    <TabsContent value="service" className="w-full">

                    </TabsContent>

                </Tabs>
                {!hasVariantService && (
                    <div className="md:w-[calc(100%-300px)] xl:w-[calc(100%-350px)] 2xl:w-[calc(100%-500px)] 3xl:w-[calc(100%-580px)] flex justify-between items-center ml-auto mt-[15px] lg:mt-[50px] relative w-full p-[0]">
                        <div className="flex flex-wrap w-full justify-between">
                            {/* Customer Support */}
                            <div className="w-full sm:w-1/2 lg:w-auto p-[8px]">
                                <Text size="text2" as="p" className="max-w-full text-[#5949A7] mb-2">
                                    Customer Support
                                </Text>
                                <Text size="text2" as="p" className="max-w-full text-white mb-2">
                                    Reach Us Directly
                                </Text>
                            </div>
                            <div className="w-full sm:w-1/2 lg:w-auto p-[8px]">
                                <div className="flex items-start">
                                    <div className="w-[33px] h-[33px] flex items-center justify-center rounded-full bg-[#6958B9]">
                                        <div className="w-[15px] h-[15px] flex items-center justify-center">
                                            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_538_6963)">
                                                    <path
                                                        d="M13.7964 9.84578C12.878 9.84578 11.9763 9.70215 11.1218 9.41977C10.7031 9.27695 10.1884 9.40797 9.93285 9.67043L8.24625 10.9436C6.29027 9.89953 5.08543 8.69508 4.05559 6.75379L5.29133 5.11113C5.61238 4.79051 5.72754 4.32215 5.58957 3.8827C5.30598 3.02371 5.16191 2.12242 5.16191 1.20367C5.16195 0.539961 4.62199 0 3.95832 0H1.20363C0.539961 0 0 0.539961 0 1.20363C0 8.81105 6.18898 15 13.7964 15C14.4601 15 15 14.46 15 13.7964V11.0494C15 10.3857 14.46 9.84578 13.7964 9.84578Z"
                                                        fill="white"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_538_6963">
                                                        <rect width="15" height="15" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ltr:pl-[15px] rtl:pr-[15px] w-[calc(100%-33px)]">
                                        <Text size="text2" as="p" className="text-[#5949A7] mb-1">
                                            Toll Free number
                                        </Text>
                                        <a href="tel:008968 24578000" className="3xl:text-[20px] 2xl:text-[17px] xl:text-[13px] lg:text-[12px] text-[12px] transition-all text-white hover:text-[#5949A7] ">
                                            008968 24578000
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div className="w-full sm:w-1/2 lg:w-auto p-[8px]">
                                <div className="flex items-start">
                                    <div className="w-[33px] h-[33px] flex items-center justify-center rounded-full bg-[#6958B9]">
                                        <div className="w-[15px] h-[15px] flex items-center justify-center">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_538_6967)">
                                                    <path d="M11.6632 9.74707L10.1556 11.2597C9.5443 11.8732 8.46866 11.8864 7.84411 11.2597L6.3365 9.74707L0.921875 15.1793C1.12343 15.2725 1.34565 15.3281 1.5819 15.3281H16.4178C16.6541 15.3281 16.8762 15.2725 17.0777 15.1793L11.6632 9.74707Z" fill="white" />
                                                    <path d="M16.4178 2.67188H1.58183C1.34558 2.67188 1.12336 2.72749 0.921875 2.82069L6.70779 8.6258C6.70817 8.62618 6.70863 8.62625 6.70902 8.62664C6.7094 8.62703 6.70947 8.62755 6.70947 8.62755L8.59079 10.5151C8.79062 10.7149 9.20905 10.7149 9.40887 10.5151L11.2898 8.62787C11.2898 8.62787 11.2903 8.62703 11.2906 8.62664C11.2906 8.62664 11.2915 8.62618 11.2919 8.6258L17.0776 2.82066C16.8762 2.72742 16.654 2.67188 16.4178 2.67188Z" fill="white" />
                                                    <path d="M0.168258 3.55811C0.0639844 3.76897 0 4.00304 0 4.25378V13.746C0 13.9967 0.0639141 14.2308 0.168223 14.4416L5.59223 9.00005L0.168258 3.55811Z" fill="white" />
                                                    <path d="M17.8321 3.55811L12.4082 9.00012L17.8321 14.4418C17.9364 14.2309 18.0004 13.9968 18.0004 13.746V4.25385C18.0004 4.00304 17.9364 3.76897 17.8321 3.55811Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_538_6967">
                                                        <rect width="18" height="18" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ltr:pl-[15px] rtl:pr-[15px]  w-[calc(100%-33px)]">
                                        <Text size="text2" as="p" className="text-[#5949A7] mb-1">
                                            Mail Us
                                        </Text>

                                        <a href="mailto:Support@Yangwang.com" className="3xl:text-[20px] 2xl:text-[17px] xl:text-[13px] lg:text-[12px] text-[12px] transition-all text-white hover:text-[#5949A7]">
                                            Support@Yangwang.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 lg:w-auto p-[8px]">
                                <div className="flex items-start">
                                    <div className="w-[33px] h-[33px] flex items-center justify-center rounded-full bg-[#6958B9]">
                                        <div className="w-[15px] h-[15px] flex items-center justify-center">
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_538_6994)">
                                                    <path d="M10.5026 0H10.4974C4.70794 0 0 4.70925 0 10.5C0 12.7969 0.74025 14.9257 1.99894 16.6543L0.690375 20.5551L4.72631 19.2649C6.38663 20.3647 8.36719 21 10.5026 21C16.2921 21 21 16.2894 21 10.5C21 4.71056 16.2921 0 10.5026 0Z" fill="white" />
                                                    <path d="M16.6132 14.8271C16.3599 15.5424 15.3545 16.1357 14.5526 16.3089C14.004 16.4257 13.2873 16.5189 10.875 15.5188C7.78926 14.2404 5.80214 11.1049 5.64727 10.9014C5.49895 10.698 4.40039 9.24112 4.40039 7.73437C4.40039 6.22762 5.16558 5.49393 5.47402 5.17893C5.72733 4.92037 6.14602 4.80225 6.54764 4.80225C6.67758 4.80225 6.79439 4.80881 6.89939 4.81406C7.20783 4.82718 7.3627 4.84556 7.56614 5.3325C7.81945 5.94281 8.43633 7.44956 8.50983 7.60443C8.58464 7.75931 8.65945 7.96931 8.55445 8.17275C8.45602 8.38275 8.36939 8.47593 8.21452 8.65443C8.05964 8.83293 7.91264 8.96943 7.75777 9.16106C7.61602 9.32775 7.45589 9.50625 7.63439 9.81468C7.81289 10.1166 8.42977 11.1232 9.33802 11.9317C10.5101 12.9752 11.4603 13.3086 11.8003 13.4503C12.0536 13.5553 12.3555 13.5304 12.5405 13.3335C12.7755 13.0802 13.0655 12.6602 13.3608 12.2467C13.5708 11.9501 13.836 11.9134 14.1142 12.0184C14.3977 12.1168 15.8979 12.8584 16.2063 13.0119C16.5148 13.1668 16.7182 13.2403 16.793 13.3702C16.8665 13.5002 16.8665 14.1105 16.6132 14.8271Z" fill="#6958B9" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_538_6994">
                                                        <rect width="21" height="21" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ltr:pl-[15px] rtl:pr-[15px]  w-[calc(100%-33px)]">
                                        <Text size="text2" as="p" className="text-[#5949A7] mb-1">
                                            WhatsApp
                                        </Text>
                                        <a href="tel:+968 24578000" className="3xl:text-[20px] 2xl:text-[17px] xl:text-[13px] lg:text-[12px] text-[12px] transition-all text-white hover:text-[#5949A7]">
                                            +968 24578000
                                        </a>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                )}

            </div>
        </section>
    );
}