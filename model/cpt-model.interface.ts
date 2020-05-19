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
