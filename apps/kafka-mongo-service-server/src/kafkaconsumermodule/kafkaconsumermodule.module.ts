import { Module } from "@nestjs/common";
import { KafkaConsumerModuleService } from "./kafkaconsumermodule.service";
import { KafkaConsumerModuleController } from "./kafkaconsumermodule.controller";
import { KafkaConsumerModuleResolver } from "./kafkaconsumermodule.resolver";

@Module({
  controllers: [KafkaConsumerModuleController],
  providers: [KafkaConsumerModuleService, KafkaConsumerModuleResolver],
  exports: [KafkaConsumerModuleService],
})
export class KafkaConsumerModuleModule {}
