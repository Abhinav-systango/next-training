import Image from "next/image";
import Header from "./_components/header/Header";
import Navbar from "./_components/navbar/Navbar";
import Hero from "./_components/hero/Hero";
import BestSeller from "./_components/bestSeller/BestSeller";

export default function Home() {
  return (
    < >
      <Header />
      <Navbar />
      <Hero />
      <BestSeller />
    </>
  );
}
