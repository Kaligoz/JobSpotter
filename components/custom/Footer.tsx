import Link from "next/link";
import { FaAccessibleIcon, FaLinkedin, FaTelegram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

export default function Footer() {
    return (
        <footer 
            
            style={{ 
                backgroundColor: "var(--color-text)",
                color: "var(--color-bg)"
            }}
        >   
            <div className="grid grid-cols-2 grid-rows-1 gap-24">
                <div className="ml-12 my-6">

                    <h1 className="font-semibold text-5xl mb-6">Знайдемо Роботу Разом</h1>
                    <p className="font-medium text-lg mb-6"> Ми допомагаємо перейти від викликів сьогодення до нових можливостей, знаходячи тимчасову роботу поруч для кожного. </p>
                    <p className="font-medium text-lg mb-4"> 
                        Наші клієнти кажуть, що співпраця з нами — це турбота про їхній успіх. 
                        <span className="text-[#969BBB]"> Ми будуємо стосунки, які приносять результат.</span> Jobspotter — це можливості для кожного. 
                    </p>

                    <div className="grid grid-cols-4 gap-2 w-fit">
                        <div className="rounded-full w-[40px] h-[40px] border border-[#B3C6CCB2] flex items-center justify-center"><FaAccessibleIcon /></div>
                        <div className="rounded-full w-[40px] h-[40px] border border-[#B3C6CCB2] flex items-center justify-center"><FaLinkedin /></div>
                        <div className="rounded-full w-[40px] h-[40px] border border-[#B3C6CCB2] flex items-center justify-center"><FaTelegram /></div>
                        <div className="rounded-full w-[40px] h-[40px] border border-[#B3C6CCB2] flex items-center justify-center"><IoLogoFacebook /></div>
                    </div>

                </div>

                <div className="mr-12 my-6 flex flex-col">
                    <div className="mb-6 flex justify-end">
                        <Link 
                            href="/" 
                            className="flex items-center justify-center w-[100px] h-[100px] font-medium text-sm bg-[#B3C6CC] rounded-full [box-shadow:0_0_40px_#B3C6CC] text-black">
                            Шукати
                        </Link>
                    </div>

                    <div className="flex w-2/3 justify-end">

                        <div className="grid grid-cols-2 gap-12 text-xl max-w-md">
                   
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold">Загальне</p>
                                <Link href="/">Про нас</Link>
                                <Link href="/">Пошук роботи</Link>
                                <Link href="/">Новини</Link>
                                <Link href="/">Спільноти</Link>
                            </div>

                            
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold">Розділи</p>
                                <Link href="/">Профіль</Link>
                                <Link href="/">Улюблене</Link>
                                <Link href="/">Для шукача</Link>
                                <Link href="/">Для роботодавця</Link>
                            </div>

                        </div>

                    </div>

                </div>

            </div>    
            
            <div className="m-auto flex flex-col items-center">
                <div className="h-0.5 w-6/7 bg-[#B3C6CCB2] mb-2.5 rounded-full"></div>

                <div className="text-[#B3C6CCB2] font-medium mb-6">Copyright © 2025</div>
            </div>

        </footer>
    );
}