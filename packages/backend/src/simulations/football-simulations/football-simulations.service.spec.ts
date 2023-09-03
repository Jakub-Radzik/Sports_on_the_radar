import { Test, TestingModule } from '@nestjs/testing';
import { FootballSimulationsService } from './football-simulations.service';
import { MatchResult } from './types/match';

jest.mock('./constants/simulation', () => ({
  SIMULATION_TIME: 1000,
  GOAL_INTERVAL: 100,
}));

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

  it('should have a default simulation name', () => {
    expect(service.getSimulationName()).toEqual('Football');
  });

  it('should return an empty array for a user with no data', () => {
    const userId = 'user2';

    const matches = service.getMatches(userId);

    expect(matches).toEqual([]);
  });

  it('should simulate a goal correctly', () => {
    const match: MatchResult = {
      id: 1,
      homeTeam: 'homeTeam',
      awayTeam: 'awayTeam',
      homeTeamScore: 1,
      awayTeamScore: 0,
    };

    service.simulateGoal(match);
    expect(match.homeTeamScore + match.awayTeamScore).toBe(2);
  });

  describe('initData method', () => {
    it('should be defined', () => {
      expect(service.initData).toBeDefined();
    });

    it('should initialize data for a user', () => {
      const userId = 'user1';

      service.initData(userId);
      const matches = service.getMatches(userId);

      expect(matches.length).toBeGreaterThan(0);
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

  describe('simulation', () => {
    it('should have goals after simulation', (done) => {
      const userId = 'user1';
      const observable = service.startSimulation(userId);

      const subscription = observable.subscribe((matches) => {
        if (matches === null) {
          subscription.unsubscribe();

          const lastResult = service.getMatches(userId);

          expect(lastResult).not.toBeNull();
          expect(lastResult.length).toBeGreaterThan(0);

          // count goals:
          let goals = 0;
          lastResult.forEach((match) => {
            goals += match.homeTeamScore + match.awayTeamScore;
          });

          // since we mock goal interval to 100 and simulation time to 1000
          expect(goals).toBe(10);

          done();
        }
      });
    });
  });
});
