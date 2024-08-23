"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddEditNoteDialog from "@/components/ui/AddEditNoteDialog";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import AIChatButton from "@/components/AIChatButton";


export default function Navbar() {
  const {theme} = useTheme()
  const [showAddEditNoteDialog, setShowAddEditNoteDialog] = useState(false);
  return (
  <>
    <div className="p-4 shadow">
      <div className="max-w-7xl m-auto flex flex-wrap gap-3 items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <Image src={logo} alt="AI NoteApp" width={50} height={50} />
          <span className="font-bold">AI NoteApp</span>
        </Link>
        <div className="flex items-center gap-2">
          <UserButton
            appearance={{
              baseTheme: (theme === "dark" ? dark : undefined),
              elements: { avatarBox: { width: "3rem", height: "3rem" } },
            }}
          />
          <ThemeToggleButton></ThemeToggleButton>
          <Button onClick={() => setShowAddEditNoteDialog(true)}>
            <Plus size={20} className="mr-2" />
            Add Note
          </Button>
          <AIChatButton/>
        </div>
      </div>
    </div>
    { showAddEditNoteDialog && <AddEditNoteDialog open={showAddEditNoteDialog} setOpen={setShowAddEditNoteDialog} />}
  </>
  )
}
