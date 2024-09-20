import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { KafkaConsumerModuleService } from "./kafkaconsumermodule.service";

@swagger.ApiTags("kafkaConsumerModules")
@common.Controller("kafkaConsumerModules")
export class KafkaConsumerModuleController {
  constructor(protected readonly service: KafkaConsumerModuleService) {}
}
