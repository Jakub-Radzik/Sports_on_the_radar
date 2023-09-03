import { Test, TestingModule } from '@nestjs/testing';
import { FootballSimulationsGateway } from './football-simulations.gateway';

describe('FootballSimulationsGateway', () => {
  let gateway: FootballSimulationsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FootballSimulationsGateway],
    }).compile();

    gateway = module.get<FootballSimulationsGateway>(
      FootballSimulationsGateway,
    );
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
