 export interface BaseCPTModel {
    id: number;
    date?:string;
    modified?:string;
    status:string;
    type:string;
    title:Rendered;
    content:Rendered;
    featured_media?:number; // /wp-json/wp/v2/media/{featured_media}
    comment_status?:string;
    tags?: number[];
    author:number;
}

interface Rendered {
    rendered: string;
    protected?:boolean;
}

export interface MediaModel {
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

