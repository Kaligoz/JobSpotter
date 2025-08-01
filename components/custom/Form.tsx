import Image from "next/image";

export default function From() {
    return (
        <section className='m-auto flex flex-row justify-center  w-2/3 mb-8'>
            <Image
                src="/FormImage.png"
                alt="A happy girl celebrating in front of her laptop"
                width={478}
                height={435}
            />
            <form className='flex flex-col text-center items-center justify-center gap-5'>
                <legend className='font-semibold text-3xl'>Ваша вакансія чекає на вас <br/>заповніть форму!</legend>
                <div className='flex flex-row gap-5 mx-3'>
                    <div>
                        <input type="text" name="name" required placeholder="Імʼя" className="text-left px-3.5 py-2 rounded-2xl border border-[#12181C4D]"/>
                    </div>
                    <div>
                        <input type="text" name="surname" required placeholder="Прізвище" className="text-left px-3.5 py-2 rounded-2xl border border-[#12181C4D]"/>
                    </div>
                </div>
                <div className="w-full max-w-md mx-3">
                    <input type="text" name="email" required placeholder="Пошта" className="text-left px-3.5 py-2 w-full rounded-2xl border border-[#12181C4D]"/>
                </div>
                <div className="w-full max-w-md mx-3">
                    <textarea name="message" required placeholder="Розкажіть більше про себе..." maxLength={150} className="text-left px-3.5 py-2 w-full rounded-2xl border border-[#12181C4D]"/>
                </div>
                <button
                    type="submit"
                    className="border border-[#6E6496] bg-[#6E6496] rounded-xl text-white px-10 py-1.5"
                >
                   Підписатись 
                </button>
            </form>
        </section>
    )
}