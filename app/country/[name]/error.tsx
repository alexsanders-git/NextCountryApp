'use client'

import BackButton from "@/components/BackButton";
import Container from "@/components/Container";

const error = () => {
    return (
        <section>
            <Container>
                <BackButton />

                <div className="flex flex-col">
                    <h1 className="text-5xl text-center font-bold text-gray-800 my-16">
                        Ops, an Error occured!
                    </h1>
                </div>
            </Container>
        </section>
    )
}

export default error;
