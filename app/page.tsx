import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <div >
    <h1 className="text-3xl font-bold underline">Hello</h1>
   <Button >
      Click Me
   </Button>
   <ThemeToggle />
   </div>
  );
}
