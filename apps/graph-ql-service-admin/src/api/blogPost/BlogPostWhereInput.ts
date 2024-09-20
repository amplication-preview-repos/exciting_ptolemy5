import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type BlogPostWhereInput = {
  author?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
