import NotFound from "@/app/not-found";
import Test from "@/data/notes/test.mdx";
import { ArrowUpLeft } from "@/components/icons";
import Link from "next/link";

const NotePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <section className="relative">
      <div className="absolute -left-20 max-sm:-top-10 max-sm:-left-2 flex gap-2">
        <ArrowUpLeft />
        <Link href="/note">Notes</Link>
      </div>
      {slug === "1" ? <Test /> : <NotFound />}
    </section>
  );
};

export default NotePage;
