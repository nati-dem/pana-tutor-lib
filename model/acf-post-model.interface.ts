export interface AcfPostModel {
    ID: number;
    post_author?: number;
    post_date: string;
    post_name: string;
    post_content: any;
    post_title: string;
    post_excerpt?: any;
    post_status: string;
    comment_status?: string;
    post_password?: string;
    post_modified: string;
    post_content_filtered?: any;
    post_parent?: number;
    post_type: string;
    post_mime_type?: any;
    comment_count: number;
}
