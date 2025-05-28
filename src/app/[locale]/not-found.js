// app/_not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="typography text-center py-[200px_80px] 3xl:py-[300px_100px]">
      <h1>404 - Page Not Found</h1>
      <Link href="/">&laquo;&laquo; Go back Home</Link>
    </div>
  );
}
