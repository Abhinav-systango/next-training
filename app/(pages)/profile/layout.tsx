import Navbar from "@/app/_components/navbar/Navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="h-screen">
        <Navbar />
        {children}
        </div>
  );
}
