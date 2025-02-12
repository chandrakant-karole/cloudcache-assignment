import { AcmeLogo } from "../navbar/NavigationBar";

export default function Footer() {
    return (
        <>
            <div className="max-w-[1440px] mx-auto flex justify-between py-4 border-t-1 border-gray-200">
                <div className="text-gray-400 text-sm max-w-md">
                    <p className="text-inherit font-medium">Address :</p>
                    <p className="text-inherit mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore dolorum quia impedit rem deleniti.</p>
                    <p className="text-inherit"><span className="font-medium"> Contact:</span> 9009880959</p>
                    <p className="text-inherit"><span className="font-medium"> Email:</span> support@phoenix.com</p>
                </div>
                <div>
                    <ul className="text-gray-400">
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>
                </div>
                <div>
                    <ul className="text-gray-400">
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>
                </div>
                <div>
                    <AcmeLogo />
                    <p className="font-bold text-inherit">Phoenix</p>
                    <p className="">One Stop Solution.</p>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto flex justify-center py-4 border-t-1 border-gray-200">
                <p className="text-gray-400 text-sm">All right reserved | copyright@2025</p>
            </div>
        </>
    )
}
