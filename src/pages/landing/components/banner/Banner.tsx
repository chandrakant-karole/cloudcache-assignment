import { Button, Image } from "@heroui/react";

export default function Banner() {
  return (
    <div className="flex justify-between py-8">
      <div className="max-w-xl">
        <h1 className="text-8xl font-bold">Heading</h1>
        <h6 className="text-6xl font-bold">Title</h6>
        <p className="text-gray-600 my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis error voluptatem sed blanditiis deserunt sint adipisci amet cumque. Cupiditate sapiente reprehenderit quaerat! Illo autem voluptate architecto! Neque, consequuntur quidem!</p>
        <Button color="primary">Explore</Button>
      </div>
      <div className="max-w-xl w-1/2">
        <Image src={"/vite.svg"}  classNames={{"wrapper":"w-full h-full ml-auto","img":"w-full h-full"}}/>
      </div>
    </div>
  )
}
