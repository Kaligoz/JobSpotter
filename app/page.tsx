import PropositionsCloseCard from "@/components/custom/PropositionsCloseCard";
import ReviewsCards from "@/components/custom/ReviewsCards";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import reviews from "@/data/reviews.json";
import localJobs from "@/data/localJobs.json";

export default function Home() {
  return (
    <main>
      <header className="m-auto flex flex-col text-center justify-center items-center mb-12">

        <h1 className="text-6xl font-semibold mb-4 w-1/3">
          Пошук роботи <br/>та підробітку без зайвих турбот
        </h1>

        <Image
          src="/MainPageImage1.png"
          alt="desk with two people working on the same project"
          width={1240}
          height={448}
        />

      </header>

      <section className="m-auto flex justify-between items-start w-2/3 mb-8">

        <div className="flex flex-col">
          <h2 className="text-4xl font-semibold mb-8">Чому обирають нас?</h2>

          <p className="font-medium text-xl mb-4">
            Ми допомагаємо знайти підробіток поруч із вами: швидко, <br/>
            просто та зручно. Тільки перевірені вакансії, широкий вибір<br/> 
            та можливість заощадити час на пошуку.
          </p>

          <div className="grid grid-cols-[auto_auto] place-items-center gap-4 mb-4">
            <h2 className="text-4xl font-bold">Різноманітність</h2>
            <p className="font-medium text-lg">
              Широкий вибір підробітків на будь-який<br/> смак та графік.
            </p>
          </div>

          <div className="grid grid-cols-[auto_auto] place-items-center gap-4 mb-4 text-[#444969] ml-8">
            <h2 className="text-4xl font-bold">Локальність</h2>
            <p className="font-medium text-lg">
              Ми знаходимо підробітки саме поруч із<br/> вашим місцем проживання.
            </p>
          </div>

          <div className="grid grid-cols-[auto_auto] place-items-center gap-4 mb-4 text-[#33474D] ml-16">
            <h2 className="text-4xl font-bold">Зручність</h2>
            <p className="font-medium text-lg">
              Простий інтерфейс дозволяє знайти<br/> роботу за декілька хвилин.
            </p>
          </div>

          <div className="grid grid-cols-[auto_auto] place-items-center gap-4 mb-4 text-[#969BBB] ml-32">
            <h2 className="text-4xl font-bold">Швидкість</h2>
            <p className="font-medium text-lg">
              Тільки перевірені роботодавці та<br/> вакансії.
            </p>
          </div>

          <div className="grid grid-cols-[auto_auto] place-items-center gap-4 mb-4 text-[#73699B] ml-64">
            <h2 className="text-4xl font-bold">Надійність</h2>
            <p className="font-medium text-lg">
              Ми допомагаємо вам розкрити потенціал<br/> і досягти кар&apos;єрних висот.
            </p>
          </div>
        </div>

        <div className="ml-8">
          <Image
            src="/MainPageGroup.png"
            alt="desk with two people working on the same project"
            className=""
            width={492}
            height={445}
          />
        </div>

      </section>

      <section className="m-auto flex flex-col justify-between items-start w-2/3 mb-8">

        <h2 className="text-4xl font-semibold mb-8">Пропозиції поруч</h2>

        <div className="flex gap-x-8">

          <Carousel>
            <CarouselContent>
              {localJobs.map((localJob) => (
                <CarouselItem className="basis-1/4" key={localJob.id}>
                  <PropositionsCloseCard 
                    link={localJob.link} 
                    coverPhoto={localJob.coverPhoto}  
                    name={localJob.name} 
                    description={localJob.description} 
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

        </div>

      </section>

      <section className="m-auto flex flex-col justify-between items-start w-2/3 mb-8">

        <h2 className="text-4xl font-semibold mb-8">Відгуки</h2>

        <Carousel>
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem className="basis-1/2" key={review.id}>
                <ReviewsCards 
                  message={review.message}
                  name={review.name}
                  rating={review.rating}
                  coverImage={review.coverImage}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </section>

      <section className="m-auto flex flex-col justify-between items-start w-2/3">

        <h2 className="text-4xl font-semibold mb-8">Найпоширені питання</h2>

        <table className="border border-[#12181C4D] text-xl font-medium mb-4 table-fixed w-full">
        <tbody>
          <tr> 
            <th className="w-20 text-4xl text-[#969BBB] border border-[#12181C4D] p-4">№</th>
            <th className="text-4xl border border-[#12181C4D]">Питання</th>
            <th className="text-4xl border border-[#12181C4D]">Відповідь</th>
          </tr>
          <tr className="group hover:bg-[#969BBB] hover:text-white">
            <td className="w-20 text-4xl text-[#969BBB] border border-[#12181C4D] p-4">
              <div className="flex items-center justify-center group-hover:text-white">
                01
              </div>
            </td>
            <td className="border border-[#12181C4D] p-4">
              <div className="flex items-center justify-center group-hover:text-white">
                Чи можна зберігати цікаві вакансії для подальшого перегляду?
              </div>
            </td>
            <td className="border border-[#12181C4D] p-4">
              <div className="flex items-center justify-center group-hover:text-white">
                Так, можна зберігати вакансії для подальшого перегляду в списку &quot;Збережені&quot;.
              </div>
            </td>
          </tr>
          <tr className="group hover:bg-[#969BBB] hover:text-white">
            <td className="w-20 text-4xl text-[#969BBB] border border-[#12181C4D] p-4">
              <div className="flex items-center justify-center group-hover:text-white">
                02
              </div>
            </td>
            <td className="border border-[#12181C4D] p-4">
              <div className="flex items-center justify-start group-hover:text-white">
                Як налаштувати сповіщення про нові вакансії?
              </div>
            </td>
            <td className="border border-[#12181C4D] p-4">
              <div className="flex items-center justify-start group-hover:text-white">
                Щоб налаштувати сповіщення про нові вакансії, потрібно вказати свої критерії пошуку на платформі, а потім активувати сповіщення через налаштування профілю.
              </div>
            </td>
          </tr>
          <tr className="group hover:bg-[#969BBB] hover:text-white">
            <td className="w-20 text-4xl text-[#969BBB] border border-[#12181C4D] p-4">
              <div className="flex items-center justify-center group-hover:text-white">
                03
              </div>
            </td>
            <td className="border border-[#12181C4D] p-4">
              <div className="flex items-center justify-start group-hover:text-white">
                Як зрозуміти, чи підходить вакансія для мене?
              </div>
            </td>
            <td className="border border-[#12181C4D] p-4">
              <div className="flex items-center justify-start group-hover:text-white">
                Щоб зрозуміти, чи підходить вакансія, перевірте вимоги, обов&apos;язки та умови роботи, порівнявши їх зі своїми навичками та досвідом.
              </div>
            </td>
          </tr>
          <tr className="group hover:bg-[#969BBB] hover:text-white">
            <td className="w-20 text-4xl text-[#969BBB] border border-[#12181C4D] p-4">
              <div className="flex items-center justify-center group-hover:text-white">
                04
              </div>
            </td>
            <td className="border border-[#12181C4D] p-4">
              <div className="flex items-center justify-start group-hover:text-white">
                Чи можна подати заявку на кілька вакансій одночасно?
              </div>
            </td>
            <td className="border border-[#12181C4D] p-4">
              <div className="flex items-center justify-start group-hover:text-white">
                Так, можна подати заявку на кілька вакансій одночасно!
              </div>
            </td>
          </tr>
          <tr className="group hover:bg-[#969BBB] hover:text-white">
            <td className="w-20 text-4xl text-[#969BBB] border border-[#12181C4D] p-4">
              <div className="flex items-center justify-center group-hover:text-white">
                05
              </div>
            </td>
            <td className="border border-[#12181C4D] p-4">
              <div className="flex items-center justify-start group-hover:text-white">
                Як змінити мову інтерфейсу на платформі?
              </div>
            </td>
            <td className="border border-[#12181C4D] p-4">
              <div className="flex items-center justify-start group-hover:text-white">
                У верхньому правому куті є вибір мови, натиснувши туди Ви зможе обрати мову яка Вам треба.
              </div>
            </td>
          </tr>
        </tbody>
        </table>

      </section>

    </main>
  );
}
