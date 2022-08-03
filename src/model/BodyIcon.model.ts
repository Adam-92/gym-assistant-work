export interface IconProps{
    icon: any,
    title: string,
    active: boolean
}
export interface BodyIconProps{
    icon: any,
    title: string,
    active: boolean,
    selectIcon: (pickedIcon: string) => void
}