import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import Image from "next/image";

async function getCountryByName(name: string): Promise<ICountry> {
    const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    const country = await response.json();
    return country[0];
}

const CountryDetail = async ({ params: { name } }: { params: { name: string } }) => {
    const country = await getCountryByName(name);

    const formatter = Intl.NumberFormat('eng', { notation: 'compact' });

    return (
        <section className="py-16">
            <Container>
                <BackButton />

                <h1 className="text-5xl font-bold text-center text-gray-800 mt-16">{decodeURI(name)}</h1>

                <article className="flex md:flex-row flex-col justify-between min-w-full mt-5 p-10 bg-white rounded-xl">
                    <div>
                        {country.capital && (
                            <h2 className="text-xl text-gray-800 mt-3">
                                <b>🏙️ Capital: </b>{country.capital}
                            </h2>
                        )}

                        {country.region && (
                            <h2 className="text-xl text-gray-800 mt-3">
                                <b>🗺️ Region: </b>{country.region} {country.subregion && `- ${country.subregion}`}
                            </h2>
                        )}

                        {country.population && (
                            <h2 className="text-xl text-gray-800 mt-3">
                                <b>👨‍👩‍👧‍👦 Population: {formatter.format(country.population)}</b>
                            </h2>
                        )}

                        {country.languages && (
                            <h2 className="text-xl text-gray-800 mt-3">
                                <b>🗣️ Language: {Object.values(country.languages).map((language) => (
                                    <span
                                        key={language}
                                        className="inline-block px-2 bg-indigo-700 mr-2 text-white text-sm rounded-full"
                                    >
                                        {language}
                                    </span>
                                ))}</b>
                            </h2>
                        )}
                    </div>

                    <div className="relative h-auto w-96">
                        <Image
                            src={country.flags.svg}
                            alt={country.flags.alt}
                            fill
                        />
                    </div>
                </article>
            </Container>
        </section>
    )
}

export default CountryDetail;