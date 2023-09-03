import { Module } from '@nestjs/common';
import { FootballSimulationsGateway } from './football-simulations/football-simulations.gateway';
import { FootballSimulationsService } from './football-simulations/football-simulations.service';

@Module({
  providers: [FootballSimulationsGateway, FootballSimulationsService],
  controllers: [],
})
export class SimulationsModule {}
