import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    // <div className="min-h-screen flex items-center justify-center bg-black absolute inset-0 z-10">
    //   <div className="flex flex-col items-center space-y-4">
    //     <div className="w-16 h-16 border-4 border-base1 border-t-transparent rounded-full animate-spin"></div>
    //     <p className="text-lg font-semibold text-gray-700 animate-pulse">
    //       Loading...
    //     </p>
    //   </div>
    // </div>
    <div className="h-dvh flex flex-col absolute inset-0 z-10 bg-black [--header-y:50px]">
      <div className="container py-2 flex justify-between items-center">
        <Skeleton className="w-[3vw] h-[80px] rounded-xl bg-accent" />
        <Skeleton className="w-[40vw] h-[10px] rounded-xl bg-accent" />
        <Skeleton className="w-[10vw] h-[40px] rounded-xl bg-accent" />
      </div>
      <div className="container py-[10dvh]">
        <Skeleton className="w-full h-[60dvh] rounded-xl bg-accent" />
        <Skeleton className="h-4 w-[250px] my-4 bg-accent" />
        <Skeleton className="h-4 w-[200px] my-4 bg-accent" />
      </div>
    </div>
  );
}
