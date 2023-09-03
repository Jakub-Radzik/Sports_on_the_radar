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

  describe('initData method', () => {
    it('should be defined', () => {
      expect(service.initData).toBeDefined();
    });

    it('should correctly clear data', () => {
      const userId = 'userId';

      service.initData(userId);
      service.simulateGoal(service.getMatches('userId')[0]);
      service.initData(userId);

      expect(service.getMatches(userId)[0].homeTeamScore).toBe(0);
      expect(service.getMatches(userId)[0].awayTeamScore).toBe(0);
    });
  });
});
