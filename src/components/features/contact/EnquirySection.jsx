
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import { Text } from "@/components/layout/Text";

export default function EnquirySection() {

    return (
        <section
            className="w-fullblock pt-[40px] lg:pt-[60px] xl:pt-[110px] 3xl:pt-[130px] pb-[40px] lg:" >
            <div className="container">
                <div className="w-100 d-flex flex-wrap px-[90px]">
                    <div className="d-block w-[510px]">
                        <h2 className="text-[40px] text-black font-medium max-w[310px]">Have questions?
                            We’re ready to
                            assist.</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
