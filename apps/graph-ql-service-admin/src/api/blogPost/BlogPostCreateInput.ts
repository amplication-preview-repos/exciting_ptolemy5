import { CommentCreateNestedManyWithoutBlogPostsInput } from "./CommentCreateNestedManyWithoutBlogPostsInput";

export type BlogPostCreateInput = {
  author?: string | null;
  comments?: CommentCreateNestedManyWithoutBlogPostsInput;
  content?: string | null;
  title?: string | null;
};
