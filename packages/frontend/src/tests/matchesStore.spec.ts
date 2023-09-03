import { MatchResult } from '../features/matchSimulations/types/match';
import { SimulationState } from '../features/matchSimulations/types/simulation';
import { MatchesStore } from '../store/matchesStore';

describe('MatchesStore', () => {
  let matchesStore: MatchesStore;

  beforeEach(() => {
    matchesStore = new MatchesStore();
  });

  it('should set and get simulation name', () => {
    matchesStore.setSimulationName('Test Simulation');
    expect(matchesStore.simulationName).toBe('Test Simulation');
  });

  it('should set and get simulation state', () => {
    matchesStore.setSimulationState(SimulationState.NOT_STARTED);
    expect(matchesStore.simulationState).toBe(SimulationState.NOT_STARTED);
  });

  it('should set and get loading state', () => {
    matchesStore.setLoading(true);
    expect(matchesStore.loading).toBe(true);
  });

  it('should set and get matches', () => {
    const testMatches: MatchResult[] = [
      { id: '1', homeTeam: 'A', awayTeam: 'B', homeTeamScore: 1, awayTeamScore: 2 },
      { id: '2', homeTeam: 'A', awayTeam: 'B', homeTeamScore: 2, awayTeamScore: 1 },
    ];
    matchesStore.setMatches(testMatches);
    expect(matchesStore.matches).toEqual(testMatches);
  });

  it('should calculate total goals correctly', () => {
    const testMatches: MatchResult[] = [
      { id: '1', homeTeam: 'A', awayTeam: 'B', homeTeamScore: 1, awayTeamScore: 2 },
      { id: '2', homeTeam: 'A', awayTeam: 'B', homeTeamScore: 2, awayTeamScore: 1 },
    ];
    matchesStore.setMatches(testMatches);
    expect(matchesStore.totalGoals).toBe(6);
  });
});
