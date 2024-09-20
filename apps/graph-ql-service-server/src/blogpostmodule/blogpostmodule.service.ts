import { Injectable } from "@nestjs/common";
import { CreateBlogPostInput } from "../blogPostModule/CreateBlogPostInput";

@Injectable()
export class BlogPostModuleService {
  constructor() {}
  async CreateBlogPost(args: CreateBlogPostInput): Promise<CreateBlogPostInput> {
    throw new Error("Not implemented");
  }
}
