import { Test, TestingModule } from '@nestjs/testing';
import { FootballSimulationsService } from './football-simulations.service';

describe('FootballSimulationsService', () => {
  let service: FootballSimulationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FootballSimulationsService],
    }).compile();

    service = module.get<FootballSimulationsService>(
      FootballSimulationsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
