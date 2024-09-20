import { BlogPost } from "../blogPost/BlogPost";

export type Comment = {
  author: string | null;
  blogPost?: BlogPost | null;
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
