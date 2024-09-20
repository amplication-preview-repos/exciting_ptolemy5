import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BlogPostModuleService } from "./blogpostmodule.service";
import { CreateBlogPostInput } from "../blogPostModule/CreateBlogPostInput";

@swagger.ApiTags("blogPostModules")
@common.Controller("blogPostModules")
export class BlogPostModuleController {
  constructor(protected readonly service: BlogPostModuleService) {}

  @common.Post("/blog-posts")
  @swagger.ApiOkResponse({
    type: CreateBlogPostInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateBlogPost(
    @common.Body()
    body: CreateBlogPostInput
  ): Promise<CreateBlogPostInput> {
        return this.service.CreateBlogPost(body);
      }
}
