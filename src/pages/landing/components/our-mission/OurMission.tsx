import ContentSection from '@components/content-section/ContentSection'

export default function OurMission() {
    return (
        <>
            <ContentSection
                headline={"Our Mission"}
                para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis error voluptatem sed blanditiis deserunt sint adipisci amet cumque. Cupiditate sapiente reprehenderit quaerat! Illo autem voluptate architecto! Neque, consequuntur quidem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis error voluptatem sed blanditiis deserunt sint adipisci amet cumque. Cupiditate sapiente reprehenderit quaerat! Illo autem voluptate architecto! Neque, consequuntur quidem!"}
                imgPath={"/vite.svg"}
                sectionType={"right-sided"}
                classNames={{
                    headline: "text-4xl font-bold",
                    wrapper: "my-16"
                }}
            />
        </>
    )
}
