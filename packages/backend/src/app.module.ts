import { Module } from '@nestjs/common';
import { SimulationsModule } from './simulations/simulations.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [SimulationsModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
