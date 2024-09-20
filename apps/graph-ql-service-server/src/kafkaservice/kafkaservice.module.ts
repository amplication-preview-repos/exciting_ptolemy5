import { Module } from "@nestjs/common";
import { KafkaServiceService } from "./kafkaservice.service";
import { KafkaServiceController } from "./kafkaservice.controller";
import { KafkaServiceResolver } from "./kafkaservice.resolver";

@Module({
  controllers: [KafkaServiceController],
  providers: [KafkaServiceService, KafkaServiceResolver],
  exports: [KafkaServiceService],
})
export class KafkaServiceModule {}
