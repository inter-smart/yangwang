
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Img } from "@/components/layout/Img";
import LocationMap from "../../common/LocationMap";

export default function LocationSection() {
    return (
        <section className="w-full block bg-[#1D0A44] 3xl:py-[100px] 2xl:py-[80px] py-[40px]">


            <div className="container">
                {/* <LocationMap /> */}
                <Tabs defaultValue="showroom" className="w-full">
                    <TabsList className="md:w-[calc(100%-300px)] xl:w-[calc(100%-350px)] 2xl:w-[calc(100%-500px)] 3xl:w-[calc(100%-580px)] flex justify-between items-center ml-auto border-b border-gray-200 relative w-full h-[60px] p-[0] rounded-0 2xl:mb-[60px] xl:mb-[40px] mb-[30px]">
                        <TabsTrigger
                            value="showroom"
                            className="relative text-white font-medium outline-none shadow-none
                                        text-[11px] sm-text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] p-[0] text-left h-full flex align-middle
                                        after:content-[''] after:absolute after:bottom-[-4px] after:left-[-1px] md:after:w-[350px] after:w-full after:h-[5px] after:bg-transparent
                                        data-[state=active]:after:bg-[#5949A7] data-[state=active]:shadow-none transition-all justify-start rounded-0 cursor-pointer"                        >
                            <div className="w-[35px] md:w-[50px] md:h-[50px] h-[35px] flex relative">
                                <Img
                                    src="carIcon.svg"
                                    alt="faq"
                                    fill
                                    sizes="(max-width: 50px)"
                                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <span className="px-[10px]">Find a showroom</span>
                        </TabsTrigger>

                        <TabsTrigger
                            value="service"
                            className="relative text-white font-medium outline-none shadow-none
                                        text-[11px] sm-text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] text-left h-full
                                        after:content-[''] after:absolute after:bottom-[-4px] after:left-[-1px] after:w-[350px] after:h-[5px] after:bg-transparent
                                        data-[state=active]:after:bg-[#5949A7]  data-[state=active]:shadow-none  transition-all justify-start rounded-0 cursor-pointer"
                        >
                            <div className="w-[20px] md:w-[30px] h-[20px] md:h-[30px] flex relative">
                                <Img
                                    src="serviceIcon.svg"
                                    alt="faq"
                                    fill
                                    sizes="(max-width: 30px)"
                                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <span className="px-[10px]">Find a service centre</span>
                        </TabsTrigger>



                    </TabsList>
                    <TabsContent value="showroom" className="w-full">
                        <LocationMap />
                    </TabsContent>
                    <TabsContent value="service" className="w-full">

                    </TabsContent>

                </Tabs>

            </div>
        </section>
    );
}