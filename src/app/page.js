import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 to-blue-500 p-6">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Browse and create Blogs
        </h2>
        <Link href={"/blogs"}>
          <button className="bg-white text-purple-400 text-lg font-bold rounded-lg py-2 px-4 mt-4">
            Explore Blogs
          </button>
        </Link>
      </div>
    </div>
  );
}
