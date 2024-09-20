import { Injectable } from "@nestjs/common";
import { CreateCommentInput } from "../commentModule/CreateCommentInput";

@Injectable()
export class CommentModuleService {
  constructor() {}
  async CreateComment(args: CreateCommentInput): Promise<CreateCommentInput> {
    throw new Error("Not implemented");
  }
}
