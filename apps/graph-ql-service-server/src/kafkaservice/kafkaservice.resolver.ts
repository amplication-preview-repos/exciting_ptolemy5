import * as graphql from "@nestjs/graphql";
import { KafkaServiceService } from "./kafkaservice.service";

export class KafkaServiceResolver {
  constructor(protected readonly service: KafkaServiceService) {}
}
