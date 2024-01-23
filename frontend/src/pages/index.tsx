import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "@/components/VideoCard";
import { timeStamp } from "console";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      Hello there
      <VideoCard title={"Just trying youtube clone | Using typescript"}
      image={"thumbnail.png"}
      channel={"thumbnail.png"}
      timestamp={"1 day ago"}
      views= {"100M"}
      author={"Krishna Mohan"}
      ></VideoCard>
    </div>
   );
}
