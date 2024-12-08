import BestOfAir from "@/components/BestOfAir";
import Featured from "@/components/Featured";
import HeroSection from "@/components/Hero";
import GearUp from "@/components/GearUp";
import DontMiss from "@/components/DontMiss";
import Essentials from "@/components/EssentailPro";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <BestOfAir/>
      <Featured/>
      <GearUp/>
      <DontMiss/>
      <Essentials/>
    </div>
  );
}
