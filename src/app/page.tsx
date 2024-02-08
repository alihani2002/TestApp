import Link from "next/link";

export default function Home() {
  return (
    <div className="container p-5 my-5 bg-primary text-white">
      <Link href={`/Cards`}>
      <h1> Hello Safary </h1>
      </Link>
    </div>
  );
}
