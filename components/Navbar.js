import Link from "next/link";

export default function Navbar() {
    return(
        <div className="h-12 bg-black w-screen flex items-center gap-7 px-7">
            <Link href="/" >Channels</Link>
            <Link href="/" >Videos</Link>
            <Link href="/" >Comments</Link>
        </div>
    )
}