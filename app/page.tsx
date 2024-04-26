import dynamic from "next/dynamic";    
import { Suspense } from "react";

const Header = dynamic(() => import("./_components/header/Header"))
const Navbar = dynamic(() => import("./_components/navbar/Navbar"))
const Hero = dynamic(() => import("./_components/hero/Hero"))
const BestSeller = dynamic(() => import("./_components/bestSeller/BestSeller"))


export default function Home() {

  
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <BestSeller />
    </>
  );
}
