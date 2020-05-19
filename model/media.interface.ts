import {BaseCPTModel} from './cpt-model.interface'

export interface MediaModel extends BaseCPTModel{
    media_details: MediaDetails;
    alt_text: string,
    media_type: string,
    mime_type: string;
    description: Rendered;
    caption: Rendered;
}

interface MediaDetails {
    width: number;
    height: number;
    file:string;
    sizes:Sizes;
}

interface Sizes {
    thumbnail:FileContent;
    full:FileContent;
}

interface FileContent {
    file:string;
    width:number;
    height:number;
    mime_type:string;
    source_url:string;
}

interface Rendered {
    rendered: string;
    protected?:boolean;
}
