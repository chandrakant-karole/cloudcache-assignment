import CardBox from "@components/card-box/CardBox";
import CardList from "./card.json";

export default function FeatCards() {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-4 mb-10">Feature Cards</h2>
            <div className="flex justify-between flex-wrap gap-10">
                {CardList.map(({ title, type, description }) => (
                    <CardBox title={title} type={type} description={description} key={type} />
                ))}
            </div>
        </div>
    )
}
