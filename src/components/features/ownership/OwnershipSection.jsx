import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";

export default function OwnershipSection({ title, description }) {
    return (
        <section className="w-full min-h-[355px] xl:min-h-[495px] 2xl:min-h-[650px] 3xl:min-h-800px] flex items-end py-[70px_15px] lg:py-[80px_35px] xl:py-[90px_45px] 3xl:py-[120px_75px] relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:left-0 before:inset-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black/60 before:to-black/60 before:pointer-events-none after:content-[''] after:block after:absolute after:-z-1 after:left-0 after:inset-0 after:w-1/2 after:h-full after:bg-gradient-to-r after:from-black after:to-black/0 after:pointer-events-none">
            <video
                src="/videos/owner.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <div className="container w-full h-full">
                <div className="flex items-center justify-center flex-col w-full h-full m-auto md:px-0 px-[15px] md:max-w-[62%]">
                    <Heading
                        size="heading3"
                        as="h3"
                        className="capitalize text-center text-white 2xl:mb-[35px] mb-[20px]"
                    >
                        Luxury isn’t just in the car, it’s in the experience
                    </Heading>
                    <Text
                        size="text4"
                        as="p"
                        className="capitalize text-center text-white"
                    >
                        It is said in "The Book of Rites: The Doctrine of the Mean": "So a gentleman respects morality and studies the way of learning. He seeks to be broad-minded and meticulous. He is extremely wise and follows the doctrine of the mean." Yangwang Auto After-sales Service adheres to the original intention of sincerity, seeks to be broad-minded and meticulous, and is committed to bringing the ultimate service experience to users.
                    </Text>
                    <LinkButton
                        href="#"
                        aria-label="Explore Ownership"
                        className="min-w-[70px] sm:min-w-[120px] xl:min-w-[140px] 3xl:min-w-[230px] mt-[35px] hover:!bg-[#F1D1A8]"
                        color="black"
                    >
                        Explore Ownership Benefits
                    </LinkButton>

                </div>
            </div>
        </section>
    );
}
