export class Segment{
    text?: string;
    name?: string;
    description?:string;
    file?: {base64: string, url?: string, type?:number}; //image = 1, video = 2, pdf = 3
    consecutive?: number;
    code?: string;

    constructor(consecutive: number){
        this.text="";
        this.name="";
        this.description = "";
        this.file={
            base64:"",
            url:"",
            type:0
        };
        this.consecutive=consecutive;
        this.code="";
    }
}