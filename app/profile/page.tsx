import Image from "next/image";
import { BriefcaseBusiness, MapPin, Settings, SquarePen, DiamondPlus, Heart } from 'lucide-react';
import DynamicStars from "@/components/custom/DynamicStars";
import Link from "next/link";
import user from "@/data/user.json";

export default function profile() {
    return (
        <main>
            <header className="m-auto flex flex-col text-center justify-center items-center mb-12">
                <h1 className="text-6xl mb-4 w-1/3">Вітаємо, <span className="font-semibold">{user.name}</span></h1>
            </header>
            <section className="m-auto flex flex-row justify-center items-start w-2/3 mb-8">
                <Image src="/personPfp.png" alt="The users profile picture" width={355} height={355} className="w-[355px] h-[355px] mr-6 rounded-md"/>
                <div className="flex flex-col gap-6 mr-12">
                    <h2 className="text-4xl font-bold text-[#33474D]">{user.surname} {user.name}</h2>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-row items-center"><BriefcaseBusiness className="w-5 text-[#6E6496]"/><p className="text-2xl font-semibold text-[#6E6496]">{user.profession}</p></div>
                        <div className="flex flex-row items-center gap-1"><MapPin className="w-5 text-[#6E6496]"/><p className="text-2xl font-semibold text-[#6E6496]"> з {user.city}</p></div>
                    </div>
                    <h3 className="font-semibold text-[#33474D] text-3xl">Рейтинг</h3>
                    <DynamicStars rating={user.rating}/>
                </div>
                <div className="flex flex-col gap-4">
                    {[
                        { label: "Налаштування", icon: <Settings className="w-6 h-6" />, link: "/"},
                        { label: "Редагувати свої дані", icon: <SquarePen className="w-6 h-6" />, link: "/"},
                        { label: "Додати вакансії", icon: <DiamondPlus className="w-6 h-6" />, link: "/"},
                        { label: "Дивитися обрані", icon: <Heart className="w-6 h-6" />, link: "/"}
                    ].map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.link}
                            className="grid grid-cols-[auto_48px] items-center gap-4"
                            >
                            <span className="text-xl text-[#444969] text-right">{item.label}</span>
                            <div className="border border-[#12181C4D] rounded-full p-2 w-12 h-12 flex items-center justify-center">
                                {item.icon}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}