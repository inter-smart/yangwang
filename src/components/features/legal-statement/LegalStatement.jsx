import Link from "next/link";
import parse from "html-react-parser";

export default function PrivacyPolicy({ data }) {
  const active = "md:text-[#5949A7] text-white max-md:duration-300 max-md:!bg-[#5949A7] underline !font-bold";

  return (
    <section className="w-full block 3xl:py-[120px] 2xl:py-[100px] lg:py-[80px] py-[30px]">
      <div className="container">
        <div className="flex flex-wrap 2xl:-mx-[30px] lg:-mx-[20px] -mx-[15px]">
          <div className="2xl:w-[23%] lg:w-[25%] md:w-[30%] w-full 2xl:px-[30px] lg:px-[20px] px-[15px]">
            <ul className="w-full flex flex-wrap 2xl:-mx-[5px] 2xl:-my-[12px] md:-mx-[5px] md:-my-[10px] sm:-mx-[10px] -mx-[2px] -my-[7.5px]">
              <li className="md:w-full w-fit 2xl:p-[12px_5px] md:p-[10px_5px] sm:p-[7.5px_10px] p-[7.5px_2px]">
                <Link
                  href="/privacy-policy"
                  className={`3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px] capitalize leading-normal font-medium text-black md:p-0 p-[10px] max-md:bg-[#5949a740]`}
                >
                  {/* {data?.title} */}
                  Privacy Policy
                </Link>
              </li>
              <li className="md:w-full w-fit 2xl:p-[12px_5px] md:p-[10px_5px] sm:p-[7.5px_10px] p-[7.5px_2px]">
                <Link
                  href="/legal-statement"
                  className={`3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px] capitalize leading-normal font-medium text-black md:p-0 p-[10px] max-md:bg-[#5949a740] ${active}`}
                >
                  Legal Statement of Yangwang
                </Link>
              </li>
            </ul>
          </div>
          <div className="2xl:w-[77%] lg:w-[75%] md:w-[70%] w-full 2xl:px-[30px] lg:px-[20px] px-[15px] md:mt-[0] mt-[30px]">
            <div className="typography [&>p]:text-[#201E1E] [&>p]:xl:mb-[25px] [&>p]:md:mb-[20px] [&>p]:mb-[15px] mb-[20px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[60px]">
              {parse(data?.description)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
