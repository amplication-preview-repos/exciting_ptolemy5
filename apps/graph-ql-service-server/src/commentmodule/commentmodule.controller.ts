import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CommentModuleService } from "./commentmodule.service";
import { CreateCommentInput } from "../commentModule/CreateCommentInput";

@swagger.ApiTags("commentModules")
@common.Controller("commentModules")
export class CommentModuleController {
  constructor(protected readonly service: CommentModuleService) {}

  @common.Post("/comments")
  @swagger.ApiOkResponse({
    type: CreateCommentInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateComment(
    @common.Body()
    body: CreateCommentInput
  ): Promise<CreateCommentInput> {
        return this.service.CreateComment(body);
      }
}
