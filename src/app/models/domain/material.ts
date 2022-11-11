import { Segment } from "./segment";

export interface Material{
    id?: string;
    title?: string;
    segments: Segment[];
}