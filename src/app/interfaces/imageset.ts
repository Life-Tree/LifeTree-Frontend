export enum Frame{
    RAIZ = "RAIZ",
    TRONCO = "TRONCO",
    RAMAS = "RAMAS",
    HOJAS = "HOJAS"
}

export interface Image {
    frame: Frame;
    base64: string;
    url: string;
}

export interface ImageSet{
    images: Image[];
}