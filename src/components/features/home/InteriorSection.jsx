export default function InteriorSection() {
  return (
    <section className="w-full h-dvh min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block bg-base1">
      <div className="container">
        <div className="flex flex-wrap">
          <div>
            <Heading
              size="heading3"
              as="h3"
              className="capitalize text-white mb-[6px] xl:mb-[8px] 3xl:mb-[10px]"
            >
              Feel the Drive
            </Heading>
            <Text
              as="p"
              className="3xl:text-[25px] 2xl:text-[20px] xl:text-[16px] lg:text-[14px] text-[12px] font-normal leading-normal text-white mb-[15px] xl:mb-[20px] 3xl:mb-[30px]"
            >
              Reserve your test drive and experience Yangwang innovation from
              the driver's seat.
            </Text>
            <LinkButton
              href="#"
              aria-label="Book Test Drive"
              className="min-w-[70px] sm:min-w-[80px] xl:min-w-[97px] 3xl:min-w-[146px]"
            >
              Book Test Drive
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
