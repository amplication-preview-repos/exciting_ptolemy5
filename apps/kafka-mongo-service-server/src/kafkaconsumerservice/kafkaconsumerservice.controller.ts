import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { KafkaConsumerServiceService } from "./kafkaconsumerservice.service";

@swagger.ApiTags("kafkaConsumerServices")
@common.Controller("kafkaConsumerServices")
export class KafkaConsumerServiceController {
  constructor(protected readonly service: KafkaConsumerServiceService) {}
}
