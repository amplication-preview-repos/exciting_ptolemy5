import * as graphql from "@nestjs/graphql";
import { KafkaConsumerServiceService } from "./kafkaconsumerservice.service";

export class KafkaConsumerServiceResolver {
  constructor(protected readonly service: KafkaConsumerServiceService) {}
}
