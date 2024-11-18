import { ArrowUpLeft } from "@/components/icons";
import Link from "next/link";

export default function AllNotes() {
  return (
    <section className="relative">
      <div className="absolute -left-20 max-sm:-top-10 max-sm:-left-2 flex gap-2">
        <ArrowUpLeft />
        <Link href="/">Index</Link>
      </div>
      <div className="flex flex-col gap-4">🚧 Still working on it 🚧</div>
    </section>
  );
}
