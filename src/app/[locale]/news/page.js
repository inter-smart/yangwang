import InnerBanner from "@/components/common/InnerBanner";
import NewSection from "@/components/features/news/NewSection";
import SocialLinkSection from "@/components/features/news/SocialLinkSection";

export const metadata = {
  title: "yangwang | News",
  description: "Demo Text.",
};

export default async function page({ params }) {
  const { locale } = await params;
  const limit = 6; // Initial number of items to fetch
  const initialPage = 1; // Starting page

  let newsData = {};
  let pagination = {};

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/news-and-events?lang=${encodeURIComponent(
        locale
      )}&limit=${limit}&page=${initialPage}`,
      {
        cache: "force-cache",
        next: { revalidate: 60 },
      }
    );

    const result = await response.json();
    if (result.success && result.status === 200) {
      newsData = result.data || [];
      pagination = result.data.meta || { total: 0, currentPage: initialPage, limit };
      console.log(`[2025-06-05T12:55:00.000Z] Fetched news data for ${locale}`, result.data);
      console.log(`[2025-06-05T12:55:00.000Z] Category list:`, result.data.category_list);
    } else {
      console.error(`[2025-06-05T12:55:00.000Z] API error: ${result.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error(`[2025-06-05T12:55:00.000Z] Failed to fetch news data: ${error.message}`);
  }

  return (
    <>
      <InnerBanner
        title={newsData?.banner_section?.title}
        banner_image={newsData?.banner_section?.web_banner}
        banner_alt={newsData?.banner_section?.web_banner_alt}
      />
      <NewSection
        newsData={newsData?.news_list}
        categoryList={newsData?.category_list || []}
        pagination={pagination}
        locale={locale}
      />
      <SocialLinkSection />
    </>
  );
}

// import InnerBanner from "@/components/common/InnerBanner";
// import NewSection from "@/components/features/news/NewSection";
// import SocialLinkSection from "@/components/features/news/SocialLinkSection";

// export const metadata = {
//   title: "yangwang | News",
//   description: "Demo Text.",
// };
// export default async function page({ params }) {
//   const { locale } = await params;

//   let newsData = {};

//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/news-and-events?lang=${encodeURIComponent(locale)}`, {
//       cache: "force-cache",
//       next: { revalidate: 60 },
//     });

//     const result = await response.json();
//     if (result.success && result.status === 200) {
//       newsData = result.data;
//       console.log(`[2025-05-29T14:37:00.000Z] Fetched news  data for ${locale}`, newsData);
//     } else {
//       console.error(`[2025-05-29T14:37:00.000Z] API error: ${result.message || "Unknown error"}`);
//     }
//   } catch (error) {
//     console.error(`[2025-05-29T14:37:00.000Z] Failed to fetch news data: ${error.message}`);
//   }
//   return (
//     <>
//       <InnerBanner
//         title={newsData?.banner_section?.title}
//         banner_image={newsData?.banner_section?.web_banner}
//         banner_alt={newsData?.banner_section?.web_banner_alt}
//       />
//       <NewSection newsData={newsData?.news_list} categoryList={newsData?.category_list} />
//       <SocialLinkSection />
//     </>
//   );
// }
