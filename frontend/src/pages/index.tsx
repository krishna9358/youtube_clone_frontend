import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "@/components/VideoCard";
import { timeStamp } from "console";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      
      <AppBar></AppBar>
      <VideoGrid></VideoGrid>

    </div>
   );
}
