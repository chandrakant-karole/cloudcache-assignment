import { User } from "@heroui/react";
import Slider from "react-slick";
export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true
    };
    return (
        <div className="my-20">
            <h2 className="text-4xl font-bold text-center mt-4 mb-14">Testimonials</h2>
            <div className="slider-container">
                <Slider {...settings}>
                    {Array(8).fill("").map((_, index) => (
                        <div key={index}>
                            <div className="max-w-[400px]">
                                <User
                                    avatarProps={{
                                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                                    }}
                                    description="Product Designer"
                                    name="Jane Doe"
                                />
                                <p className="text-default-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat labore omnis maxime explicabo amet, qui ad dolorum eius itaque illo hic minima, beatae dolorem alias. Ut nisi laboriosam libero.</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    )
}
