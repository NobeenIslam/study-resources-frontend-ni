export interface ResourceInfo {
  id: number;
  title: string;
  description: string;
  url: string;
  origin: string;
  author_id: number;
  creation_date: string;
  votes: number;
  content_type: string;
  recommended_week?: string;
  evaluation?: string;
  justification?: string;
}
