export interface Product {
    id: number, 
    nickname: string,
    tooltip_nickname: string,
    drucktechnik: string,
    tooltip_drucktechnik: string,
    bedruckstoff: string,
    tooltip_bedruckstoff: string,
    materialfarbe: string,
    tootltip_materialfarbe: string,
    farbigkeit: string,
    tooltip_farbigkeit: string,
    form: string,
    tooltip_form: string,
    format_breite: number,
    format_hoehe: number,
    tooltip_format: string,
    traeger: string,
    tooltip_traeger: string,
    klebehaftung: string,
    tooltip_klebehaftung: string,
    lieferland: string,
    liefertermin: string,
    tooltip_liefertermin: string,
    sorten: number,
    auflage: number,
    price_net: number,
    price_gross: number,
    image_calc_url: string,
    quantity: number
};

// In ~/types/index.ts or CartStore.ts
export interface CartItem {
    id: number;
    nickname: string;
    description: string;
    price_net: number;
    price_gross: number;
    data_cookie: string; // Assuming this is some form of additional data for the cart
    user_comment: string; // User's comment or customization note
    quantity?: number; // Optional, for cart usage
}
