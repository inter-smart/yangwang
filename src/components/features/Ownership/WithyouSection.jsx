import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";

export default function OwnershipSection({ }) {
    return (
        <section className="w-full py-[30px_25px] lg:py-[60px_55px] xl:py-[80px_70px] 3xl:py-[100px_115px]">
            <div className="container">
                <div className="h-full min-h-[335px] xl:min-h-[365px] 2xl:min-h-[535px] w-full flex items-center relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:left-0 before:inset-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black/60 before:to-black/60 before:pointer-events-none after:content-[''] after:block after:absolute after:-z-1 after:left-0 after:inset-0 after:w-1/2 after:h-full after:bg-gradient-to-t after:from-[rgba(0,0,0,0.5)] after:to-[rgba(0,0,0,0.5)] after:pointer-events-none">
                <img
                    src="/images/withu.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                />
                <div className="w-full h-full">
                    <div className="flex items-center justify-center flex-col w-full h-full m-auto max-w-[62%]">
                        <Heading
                            size="heading3"
                            as="h3"
                            className="capitalize text-center text-white 2xl:mb-[35px] mb-[20px]"
                        >
                            We’re Always With You
                        </Heading>
                        <Text
                            size="text4"
                            as="p"
                            className="capitalize text-center text-white"
                        >
                            All the surprising goods are available in Yangwang Mall to enrich your car life. The <br /> Yangwang Mall will continue to add new products, so stay tuned.
                        </Text>
                        <LinkButton
                            href="#"
                            aria-label="Book Test Drive"
                            className="min-w-[70px] sm:min-w-[100px] xl:min-w-[120px] 3xl:min-w-[145px] mt-[35px] !bg-[#FFF] hover:!bg-[#F1D1A8]"

                        >
                            Contact Us
                        </LinkButton>

                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}
