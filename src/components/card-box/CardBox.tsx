import { Card, CardHeader, CardBody } from "@heroui/react";
import { CardBoxPropType } from "./card-box.types";

export default function CardBox({ title, type, description }: CardBoxPropType) {
    return (
        <>
            <Card className="max-w-[400px] min-h-[200px]">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                        <p className="text-lg font-medium">{title}</p>
                        <p className="text-small text-default-500">{type}</p>
                    </div>
                </CardHeader>
                <CardBody>
                    <p className="text-default-600">{description}</p>
                </CardBody>
            </Card>
        </>
    )
}
