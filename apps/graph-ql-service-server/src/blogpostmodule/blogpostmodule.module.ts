import { Module } from "@nestjs/common";
import { BlogPostModuleService } from "./blogpostmodule.service";
import { BlogPostModuleController } from "./blogpostmodule.controller";
import { BlogPostModuleResolver } from "./blogpostmodule.resolver";

@Module({
  controllers: [BlogPostModuleController],
  providers: [BlogPostModuleService, BlogPostModuleResolver],
  exports: [BlogPostModuleService],
})
export class BlogPostModuleModule {}
