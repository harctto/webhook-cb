export interface ICharacter {
    id: string
    name: string
    elements: string
    rarity : number
}

export interface IHexColor {
    element: string,
    hex: string
}

export interface IWeapon {
    id: string
    name: string
    type: string
    rarity : number
}