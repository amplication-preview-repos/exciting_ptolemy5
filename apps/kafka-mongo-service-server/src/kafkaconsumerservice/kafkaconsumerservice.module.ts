import { Module } from "@nestjs/common";
import { KafkaConsumerServiceService } from "./kafkaconsumerservice.service";
import { KafkaConsumerServiceController } from "./kafkaconsumerservice.controller";
import { KafkaConsumerServiceResolver } from "./kafkaconsumerservice.resolver";

@Module({
  controllers: [KafkaConsumerServiceController],
  providers: [KafkaConsumerServiceService, KafkaConsumerServiceResolver],
  exports: [KafkaConsumerServiceService],
})
export class KafkaConsumerServiceModule {}
