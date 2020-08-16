export interface BoardPostCreateRequest {
  id?: number;
  course_id: number;
  post_title: string;
  post_content: string;
  post_type: BoardPostType;
  points?: number;
  due_date?: string; // format: 2020-04-17
  created_by?: number;
  status: BoardPostStatus;
  group_ids: number[];
}

export enum BoardPostType {
  generic = "generic",
  assignment = "assignment",
  media = "media",
  material = "material",
  link = "link",
}

export enum BoardPostStatus {
  published = "published",
  draft = "draft",
  hidden = "hidden",
}
