import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  author?: SortOrder;
  blogPostId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
