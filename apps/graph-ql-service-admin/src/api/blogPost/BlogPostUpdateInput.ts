import { CommentUpdateManyWithoutBlogPostsInput } from "./CommentUpdateManyWithoutBlogPostsInput";

export type BlogPostUpdateInput = {
  author?: string | null;
  comments?: CommentUpdateManyWithoutBlogPostsInput;
  content?: string | null;
  title?: string | null;
};
