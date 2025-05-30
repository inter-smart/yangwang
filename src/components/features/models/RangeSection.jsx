import Image from "next/image";


export default function RangeSection() {
  return (
    <section className="w-full h-auto block">
        <div className="container">
            <div className="flex flex-wrap items-center">
                <div>
                    <Image
                    src="/images/model-range-u8.png"
                    alt="model-range-u8"
                    width={590}
                    height={590} />
                </div>
                <div>
                    
                </div>

            </div>
        </div>
    </section>
  )
}
