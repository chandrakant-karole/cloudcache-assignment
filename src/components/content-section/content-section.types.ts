export type ContentSectionPropType = {
    headline: string,
    title?: string,
    para: string,
    buttonText?: string,
    imgPath: string,
    sectionType: "left-sided" | "right-sided",
    classNames?: {
        headline?: string,
        title?: string,
        para?: string,
        wrapper?: string
    }
}