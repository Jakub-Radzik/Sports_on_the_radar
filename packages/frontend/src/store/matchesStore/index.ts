import { makeAutoObservable } from 'mobx';
import { MatchResult } from '../../features/matchSimulations/types/match';
import { SimulationState } from '../../features/matchSimulations/types/simulation';

export class MatchesStore {
  simulationName = '';
  matches: MatchResult[] = [];
  loading = false;
  simulationState: SimulationState = SimulationState.NOT_STARTED;

  constructor() {
    makeAutoObservable(this);
  }

  get totalGoals() {
    return this.matches.reduce((acc, curr) => acc + curr.homeTeamScore + curr.awayTeamScore, 0);
  }

  setSimulationName = (name: string) => {
    this.simulationName = name;
  };

  setSimulationState = (state: SimulationState) => {
    this.simulationState = state;
  };

  setLoading = (loading: boolean) => {
    this.loading = loading;
  };

  setMatches = (matches: MatchResult[]) => {
    this.matches = matches;
  };
}

const matchesStore = new MatchesStore();
export default matchesStore;
