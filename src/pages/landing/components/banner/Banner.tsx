import ContentSection from "@components/content-section/ContentSection";

export default function Banner() {
    return (
        <>
            <ContentSection
                headline={"Heading"}
                title={"Title"}
                para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis error voluptatem sed blanditiis deserunt sint adipisci amet cumque. Cupiditate sapiente reprehenderit quaerat! Illo autem voluptate architecto! Neque, consequuntur quidem!"}
                imgPath={"/vite.svg"}
                sectionType={"left-sided"}
                buttonText="Explore"
                classNames={{
                    title: "text-6xl font-bold",
                    headline: "text-8xl font-bold"
                }}
            />
        </>
    )
}
