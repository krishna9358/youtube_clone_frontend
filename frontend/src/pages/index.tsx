import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "@/components/VideoCard";
import { timeStamp } from "console";
import { VideoGrid } from "@/components/VideoGrid";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      Hello there
      <VideoGrid></VideoGrid>
    </div>
   );
}
