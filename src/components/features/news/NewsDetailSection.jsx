import React from 'react';
import Image from "next/image";

export default function NewsDetailSection() {
    return (
        <section className="w-full h-auto block 2xl:py-[120px_20px] xl:py-[80px_20px] md:py-[60px_20px] py-[40px_10px]">
            <div className="container">
                <div className="3xl:max-w-[940px] md:max-w-[630px] 3xl:mb-[70px] xl:mb-[50px] md:mb-[30px] mb-[20px]">
                    <div className="xl:text-[11px] md:text-[10px] text-[9px] font-medium uppercase text-white w-fit bg-[#5949A7] xl:p-[10px_20px] md:p-[10px] p-[5px_10px] 3xl:mb-[40px] xl:mb-[25px] md:mb-[15px] mb-[10px]">
                        Technology
                    </div>
                    <h2 className="text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[44px] 3xl:text-[40px] font-bold leading-tight text-black 2xl:mb-[20px] mb-[15px]">YangWang U8 Launched in China with 1100 HP and four motors</h2>
                    <span className="3xl:text-[18px] 2xl:text-[16px] xl:text-[12px] text-[12px] font-normal leading-normal text-black">
                        19 May 2025
                    </span>
                </div>
                <div className="w-full h-auto aspect-[1720/800] 3xl:mb-[90px] xl:mb-[60px] md:mb-[30px] mb-[20px] overflow-hidden block">
                    <Image
                        src="/images/news-detail-1.jpg"
                        alt="Image-1"
                        width={1720}
                        height={800}
                    />
                </div>
                <div className="typography [&>*]:md:my-[10px] [&>*]:my-[4px] [&:has(img)]:grid [&:has(img)]:gap-4 [&:has(img)]:grid-cols-1 sm:[&:has(img+img)]:grid-cols-2 lg:[&:has(img+img+img)]:grid-cols-3 [&>p]:col-span-full [&>p]:grid-cols-1 [&>p]:text-[12px] [&>p]:xl:text-[13px] [&>p]:2xl:text-[16px] [&>img]:col-span-1 space-y-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Piso igitur hoc modo, vir optimus tuique, ut scis, amantissimus. Nullum inveniri verbum potest quod magis idem declaret Latine, quod Graece, quam declarat voluptas. Huc et illuc, Torquate, vos versetis licet, nihil in hac praeclara epistula scriptum ab Epicuro congruens et conveniens decretis eius reperietis. Huius ego nunc auctoritatem sequens idem faciam. Quis est autem dignus. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    <Image
                        src="/images/news-detail-2.jpg"
                        alt="Image-1"
                        width={560}
                        height={360}
                    />
                    <Image
                        src="/images/news-detail-3.jpg"
                        alt="Image-1"
                        width={560}
                        height={360}
                    />
                    <Image
                        src="/images/news-detail-4.jpg"
                        alt="Image-1"
                        width={560}
                        height={360}
                    />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Piso igitur hoc modo, vir optimus tuique, ut scis, amantissimus. Nullum inveniri verbum potest quod magis idem declaret Latine, quod Graece, quam declarat voluptas. Huc et illuc, Torquate, vos versetis licet, nihil in hac praeclara epistula scriptum ab Epicuro congruens et conveniens decretis eius reperietis. Huius ego nunc auctoritatem sequens idem faciam. Quis est autem dignus. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
            </div>
        </section>
    );
};