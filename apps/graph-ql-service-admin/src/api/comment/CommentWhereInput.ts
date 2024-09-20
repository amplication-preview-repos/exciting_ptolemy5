import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  blogPost?: BlogPostWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
};
