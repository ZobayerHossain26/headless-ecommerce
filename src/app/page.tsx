
import TopBar from "@/components/sections/TopBar";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Image src="/logo.png" alt="Logo_image" width={200} height={200} />
      <p>logo</p>
    </div>
  )
}

export default Home;