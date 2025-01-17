export interface IProduct {
    id?:number,
    title:string,
    price:number,
    description?:string,
    category?:string,
    image?:string,
    rate?:number,
    rating?:IRating
}

export interface IRating{
    rate?:number,
    count?:number
}