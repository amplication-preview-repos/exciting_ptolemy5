import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { KafkaModuleService } from "./kafkamodule.service";

@swagger.ApiTags("kafkaModules")
@common.Controller("kafkaModules")
export class KafkaModuleController {
  constructor(protected readonly service: KafkaModuleService) {}
}
