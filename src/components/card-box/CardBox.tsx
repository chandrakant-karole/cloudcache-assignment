import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
export default function CardBox() {
    return (
        <>
            <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                        <p className="text-lg font-medium">Card Title</p>
                        <p className="text-small text-default-500">Type</p>
                    </div>
                </CardHeader>
                <CardBody>
                    <p className="text-default-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis error voluptatem sed blanditiis deserunt sint adipisci amet cumque.</p>
                </CardBody>
                {/* <CardFooter>
                    <Link href="https://github.com/heroui-inc/heroui">
                        Read more
                    </Link>
                </CardFooter> */}
            </Card>
        </>
    )
}
