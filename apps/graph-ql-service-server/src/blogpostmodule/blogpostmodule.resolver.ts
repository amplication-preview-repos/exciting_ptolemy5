import * as graphql from "@nestjs/graphql";
import { CreateBlogPostInput } from "../blogPostModule/CreateBlogPostInput";
import { BlogPostModuleService } from "./blogpostmodule.service";

export class BlogPostModuleResolver {
  constructor(protected readonly service: BlogPostModuleService) {}

  @graphql.Mutation(() => CreateBlogPostInput)
  async CreateBlogPost(
    @graphql.Args()
    args: CreateBlogPostInput
  ): Promise<CreateBlogPostInput> {
    return this.service.CreateBlogPost(args);
  }
}
