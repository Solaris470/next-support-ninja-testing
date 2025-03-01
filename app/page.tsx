import Header from "@/components/header";
import Content from "@/components/content";

export default function Home() {
  return (
    <div className="p-6">
      <div className="mb-20">
        <Header />
      </div>
      <div className="">
        <Content />
      </div>
    </div>
  );
}
