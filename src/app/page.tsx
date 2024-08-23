import Image from "next/image";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth()

  if (userId) redirect("/note")

  return (
    <main className="flex flex-col h-screen items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="AI NoteApp" width={100} height={100} />
        <span className="font-extrabold tracking-tight text-4xl lg:text-5xl">
          AI NoteApp
        </span>
      </div>
      <p className="max-w-prose text-center">Let AI organize, summarize, and enhance your notes effortlessly. Enjoy seamless access across devices with a clean, secure interface!</p>
      <Button size="lg" asChild >
        <Link href="/note">
          Open 
        </Link>
      </Button>
    </main>
  );
}
