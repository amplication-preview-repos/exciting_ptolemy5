import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { KafkaServiceService } from "./kafkaservice.service";

@swagger.ApiTags("kafkaServices")
@common.Controller("kafkaServices")
export class KafkaServiceController {
  constructor(protected readonly service: KafkaServiceService) {}
}
