import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex flex-row items-center justify-between py-4 px-8">
            <Image 
               src="/logo.png"
               alt="Logo for JobSpotter" 
               width={176}
               height={36}
            />
            <div className="flex flex-row items-center justify-center gap-2">
                <p className="border rounded-full border-black p-1">
                    p
                </p>
                <ThemeToggle/>
            </div>
        </nav>
    );
}