import Header from "@/app/_components/header/Header";
import Navbar from "@/app/_components/navbar/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <>
        <Header />
        <Navbar />
        {children}
        </>
  );
}
