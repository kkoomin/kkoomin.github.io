import Link from "next/link";

export default function About() {
  return (
    <>
      <Link href="/">Index</Link>
      <section>
        <h1>About Me</h1>
        {/* Name */}
        <div>Minha Koo</div>
        {/* Skills */}
        <div>Skills</div>
        {/* Experience */}
        <div>Experience</div>
        {/* Education */}
        <div>Education</div>
        {/* Other Interests */}
        <div>Other Interests</div>
      </section>
    </>
  );
}
