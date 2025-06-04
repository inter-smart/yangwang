export default function ExteriorInterior() {
  return (
    <>
      <div className="3xl:text-[220px] 2xl:text-[200px] xl:text-[150px] lg:text-[130px] sm:text-[92px] text-[72px] leading-none uppercase font-medium bg-gradient-to-b from-[#cfcece] to-transparent bg-clip-text text-transparent absolute z-2 top-[15px] xl:top-[20px] 2xl:top-[30px] 3xl:top-[40px] ltr:right-[15%] rtl:left-[15%] mix-blend-darken">
        u8
      </div>
      <div className="w-full h-full absolute inset-0 z-1">
        <Swiper
          spaceBetween={0}
          navigation={false}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Thumbs]}
          className="w-full h-full"
          onSlideChange={handleSlideChange}
        >
          {colorVariants.exterior.colors.map((colorItem, colorIndex) => (
            <SwiperSlide key={`main-slide-${colorIndex}`}>
              <Swiper
                effect={"fade"}
                spaceBetween={10}
                navigation={true}
                modules={[EffectFade, Navigation]}
                className="w-full h-full"
              >
                {colorItem.images.map((imgItem, imgIndex) => (
                  <SwiperSlide
                    key={`sub-slide-${imgIndex}`}
                    className="bg-white"
                  >
                    <picture>
                      <source
                        media="(max-width: 768px)"
                        srcSet="/images/models-u8-bodyFeatures-bg.jpg"
                      />
                      <Image
                        src={imgItem.url}
                        alt={imgItem.alt_text}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </picture>
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container h-full">
        <div className="h-full flex flex-col justify-between">
          <div className="flex justify-between gap-[20px] relative z-1">
            <div>
              <Heading size="heading3" as="h3" className="text-black">
                Design and Dimensions
              </Heading>
            </div>
            <div>
              <button
                // onClick={handleViewTypeClick}
                onClick={handleInteriorViewClick}
                className="bg-black/20 cursor-pointer"
              >
                {interiorView ? (
                  <Image
                    src="/images/models-view-1.svg"
                    alt="models-view-1"
                    width={100}
                    height={64}
                  />
                ) : (
                  <Image
                    src="/images/models-view-2.svg"
                    alt="models-view-2"
                    width={100}
                    height={64}
                  />
                )}
              </button>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-end gap-[20px] relative z-1">
              <div>
                <Heading
                  size="heading6"
                  as="h6"
                  className="capitalize text-black mb-[4px] xl:mb-[6px] 3xl:mb-[10px]"
                >
                  {colorVariants.exterior.colors[activeIndex]?.color_name}
                </Heading>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  onSlideChange={handleSlideChange}
                  spaceBetween={10}
                  slidesPerView={"auto"}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Thumbs]}
                  className="w-full h-full"
                >
                  {colorVariants.exterior.colors.map((item, index) => (
                    <SwiperSlide
                      key={`thumb-${index}`}
                      className={`${
                        index === activeIndex ? "scale-100" : "scale-80"
                      } !w-[50px] transition-transform`}
                    >
                      <div className="w-[50px] rounded aspect-square cursor-pointer relative z-0">
                        <Image
                          src={item.color_thumb.url}
                          alt={item.color_thumb.alt_text}
                          fill
                          sizes="50px"
                          title={item.color_name}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="flex gap-[4px] xl:gap-[6px] 3xl:gap-[10px]">
                <Button
                  color="white"
                  aria-label="View Interior"
                  className="min-w-[90px] sm:min-w-[100px] xl:min-w-[110px] 2xl:min-w-[150px] 3xl:min-w-[170px] !border-[#cecece]"
                  onClick={handleInteriorViewClick}
                >
                  View Interior
                </Button>
                <Button
                  color="black"
                  aria-label="View Wheels"
                  className="min-w-[90px] sm:min-w-[100px] xl:min-w-[110px] 2xl:min-w-[150px] 3xl:min-w-[170px]"
                >
                  View Wheels
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
