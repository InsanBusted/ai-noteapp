import Note from "@/components/Note";
import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI - NoteApp",
};
export default async function NotesPages() {
  const { userId } = auth();

  if (!userId) throw Error("UserId Undefined");

  const allNotes = await prisma.note.findMany({ where: { userId } });

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {allNotes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
      {allNotes.length === 0 && (
        <div className="col-span-full text-center">You dont have any notes yet. Why you dont you create one?</div>
      )}
    </div>
  );
}