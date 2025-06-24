'use client';
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#232526] to-[#414345] animate-fadeIn">
      <div className="relative flex flex-col items-center px-8 py-10 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
        <div className="mb-6">
          <div className="w-20 h-20 rounded-full border-4 border-white/30 border-t-transparent animate-spin bg-gradient-to-tr from-pink-400 via-purple-400 to-blue-400" />
        </div>
        <div className="mb-2 text-xl font-semibold text-white/90 tracking-wide animate-pulse">Loading your experience...</div>
        <div className="w-48 h-2 rounded-full bg-white/10 overflow-hidden mt-4">
          <div className="h-full w-1/2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-progressBar" />
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in;
        }
        @keyframes progressBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-progressBar {
          animation: progressBar 1.2s infinite linear;
        }
      `}</style>
    </div>
  );
}

// import { Skeleton } from "@/components/ui/skeleton";

// export default function Loading() {
//   return (
//     // <div className="min-h-screen flex items-center justify-center bg-black absolute inset-0 z-10">
//     //   <div className="flex flex-col items-center space-y-4">
//     //     <div className="w-16 h-16 border-4 border-base1 border-t-transparent rounded-full animate-spin"></div>
//     //     <p className="text-lg font-semibold text-gray-700 animate-pulse">
//     //       Loading...
//     //     </p>
//     //   </div>
//     // </div>
//     <div className="h-dvh flex flex-col absolute inset-0 z-10 bg-black [--header-y:50px]">
//       <div className="container py-2 flex justify-between items-center">
//         <Skeleton className="w-[3vw] h-[80px] rounded-xl bg-accent" />
//         <Skeleton className="w-[40vw] h-[10px] rounded-xl bg-accent" />
//         <Skeleton className="w-[10vw] h-[40px] rounded-xl bg-accent" />
//       </div>
//       <div className="container py-[10dvh]">
//         <Skeleton className="w-full h-[60dvh] rounded-xl bg-accent" />
//         <Skeleton className="h-4 w-[250px] my-4 bg-accent" />
//         <Skeleton className="h-4 w-[200px] my-4 bg-accent" />
//       </div>
//     </div>
//   );
// }
