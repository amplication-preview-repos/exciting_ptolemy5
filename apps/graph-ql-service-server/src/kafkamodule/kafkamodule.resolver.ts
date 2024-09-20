import * as graphql from "@nestjs/graphql";
import { KafkaModuleService } from "./kafkamodule.service";

export class KafkaModuleResolver {
  constructor(protected readonly service: KafkaModuleService) {}
}
