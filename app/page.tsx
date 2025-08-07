import Image from "next/image";
import Guest from "@/components/Guest";

import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  return <Guest />;
}
