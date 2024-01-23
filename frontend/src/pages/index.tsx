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
      <h1 className="flex justify-center p-2 border-t border-gray-500">Made with ❤ By  Krishna</h1>
    </div>
   );
}
