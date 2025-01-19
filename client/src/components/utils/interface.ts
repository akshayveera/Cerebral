
export interface Comp1Info {
    [key: string] : number,
    purchases : number,
    revenue : number,
    refunds : number,
}

export interface Comp2Info {
    [key: string] : any,
    month : string,
    last_year : number,
    this_year : number,
}

export interface Comp6Info {
    [key: string] : any,
    product : string,
    sold_amount : number,
    unit_price: number,
    revenue: number,
    rating: number
}

export interface Comp3Info {
    [key: string] : any,
    score : number,
    title : string,
    message : string
}

export interface Comp5Info {
    [key: string] : any,
    positive : number,
    negative : number,
    neutral : number
}

export interface Comp4Info {
    [key: string] : any,
    record_date : string,
    web_sales : number,
    offline_sales : number
}