export enum Frame{
    RAIZ = "RAIZ",
    TALLO = "TALLO",
    HOJAS = "HOJAS",
    FLOR = "FLOR",
    FRUTO = "FRUTO",
    PARTE_ENFERMA = "PARTE_ENFERMA"
}

export interface Image {
    frame: Frame;
    base64: string;
    url: string;
}

export interface ImageSet{
    images: Image[];
}