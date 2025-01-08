import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl text-center">
        Xin chào mọi người
      </h1>
      <ModeToggle />
    </main>
  );
}
