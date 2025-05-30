import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text"; 
export default function GlobalSection() {

    return (
        <section className="w-full 3xl:py-[130px] 2xl:py-[80px] xl:py-[50px] py-[40px] relative">
            <div className="container mx-auto">
                <Heading
                    size="heading3"
                    as="h3"
                    className="text-black font-medium 2xl:mb-[25px] lg:max-w-[750px] max-w-[450px] mx-auto mb-[20px] text-center" >
                    Global support initiatives underscores its dedication to providing a premium ownership 
                    experience for its customers.
                </Heading>
                <Text
                    size="text4"
                    as="p"
                    className="capitalize text-black text-center 2xl:max-w-[1150px] max-w-[850px] mx-auto ">
                    Dedicated Service Centers: The brand inaugurated its first flagship Yangwang Center in Shanghai, providing a one-stop solution encompassing
                     sales, delivery, technical support,
                     and after-sales services. The center features amenities like customer lounges, libraries, and children's 
                     play areas to enhance the customer experience. Global Expansion: While Yangwang's primary market is China, 
                     BYD has been expanding its global footprint. For instance, in Turkey, BYD partnered with ALJ Turkey to establish a dealer 
                     network offering localized sales and after-sales services.
                </Text>
            </div>
        </section>



    );
}
