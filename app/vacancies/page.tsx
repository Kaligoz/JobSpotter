import Form from "@/components/custom/Form";
import OfferCard from "@/components/custom/OfferCard";
import jobs from "@/data/jobs.json";

export default function vacancies(){
    return (
        <main>
            <header className="mx-auto flex flex-col text-center justify-center items-center mb-12">
                <h1 className="text-6xl font-semibold mb-4 w-1/3">
                    Не відкладайте можливості – знайдіть роботу зараз!
                </h1>
            </header>
            {/* <section className="mx-auto flex justify-between items-start w-2/3 mb-8">
                <h2 className="text-4xl font-semibold mb-8">Приєднуйся до спільнот</h2>
            </section> */}
            <section className="m-auto flex flex-col justify-center items-start w-2/3 mb-8">
                <h2 className="text-4xl font-semibold mb-8 items-start">Вакансії</h2>
                <div className="grid grid-cols-2 grid-rows-3 gap-4 self-center">

                    {jobs.map((job) => (
                        <OfferCard
                            key={job.id}
                            nameOfJob={job.nameOfJob}
                            payment={job.payment}
                            distance={job.distance}
                            description={job.description}
                            coverImage={job.coverImage}
                        />
                    ))}
                </div>
            </section>
            <Form/>
        </main>
    )
}