"use client";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  // const { data: session, status } = useSession();

  // if (status === "loading") {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <h1 className="text-2xl font-semibold">Loading...</h1>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">
        Welcome,
      </h1>
    </div>
  );
}
