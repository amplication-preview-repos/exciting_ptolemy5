import * as graphql from "@nestjs/graphql";
import { KafkaConsumerModuleService } from "./kafkaconsumermodule.service";

export class KafkaConsumerModuleResolver {
  constructor(protected readonly service: KafkaConsumerModuleService) {}
}
