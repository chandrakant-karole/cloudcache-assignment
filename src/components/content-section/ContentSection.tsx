import { Button, Image } from "@heroui/react";
import { ContentSectionPropType } from "./content-section.types";

export default function ContentSection({ headline, title, imgPath, buttonText, para, sectionType, classNames }: ContentSectionPropType) {
  return (
    <div className={`flex justify-between py-8 ${classNames?.wrapper || ""} ${sectionType === "left-sided" ? "" : "flex-row-reverse"}`}>
      <div className="max-w-xl">
        <h1 className={classNames?.headline || ""}>{headline}</h1>
        {title && <h6 className={classNames?.title || ""}>{title}</h6>}
        <p className={`text-gray-600 my-2 ${classNames?.para || ""}`}>{para}</p>
        {buttonText && <Button color="primary">{buttonText}</Button>}
      </div>
      <div className="max-w-xl w-1/2">
        <Image src={imgPath} classNames={{ "wrapper": "w-full h-full mx-auto", "img": "w-full h-full" }} />
      </div>
    </div>
  )
}
