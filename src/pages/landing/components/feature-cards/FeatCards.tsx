import CardBox from "@components/card-box/CardBox";

export default function FeatCards() {
    return (
        <div>
            <h2 className="text-4xl font-semibold text-center mt-4 mb-10">Feature Cards</h2>
            <div className="flex justify-between">
                <CardBox />
                <CardBox />
                <CardBox />
            </div>
        </div>
    )
}
