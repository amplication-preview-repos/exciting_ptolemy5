import * as graphql from "@nestjs/graphql";
import { CreateCommentInput } from "../commentModule/CreateCommentInput";
import { CommentModuleService } from "./commentmodule.service";

export class CommentModuleResolver {
  constructor(protected readonly service: CommentModuleService) {}

  @graphql.Mutation(() => CreateCommentInput)
  async CreateComment(
    @graphql.Args()
    args: CreateCommentInput
  ): Promise<CreateCommentInput> {
    return this.service.CreateComment(args);
  }
}
