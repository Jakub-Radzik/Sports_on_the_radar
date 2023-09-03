import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GOAL_INTERVAL, SIMULATION_TIME } from './constants/simulation';
import { Match, MatchResult } from './types/match';
import { initedData } from './helpers/exampleData';

@Injectable()
export class FootballSimulationsService {
  private simulations: Map<string, MatchResult[]> = new Map<
    string,
    MatchResult[]
  >();
  public simulationName: string;
  private intervals = new Map<string, NodeJS.Timeout>();

  constructor() {
    this.simulationName = 'Football';
  }

  public getSimulationName(): string {
    return this.simulationName;
  }

  public initData(userId: string): void {
    this.simulations.set(userId, initedData);
  }

  public getMatches(userId: string): Match[] {
    return this.simulations.get(userId) || [];
  }

  private getRandomMatch(matches: MatchResult[]): MatchResult {
    const randomIndex = Math.floor(Math.random() * matches.length);
    return matches[randomIndex];
  }

  private simulateGoal(match: MatchResult): void {
    const isHomeTeamScoring = Math.random() < 0.5;
    if (isHomeTeamScoring) {
      match.homeTeamScore++;
    } else {
      match.awayTeamScore++;
    }
  }

  public startSimulation(userId: string): Observable<Match[]> {
    if (!this.simulations.has(userId)) {
      this.initData(userId);
    }

    return new Observable<MatchResult[]>((observer) => {
      let simulationTime = SIMULATION_TIME;

      const userMatches = this.simulations.get(userId)!;

      const simulationInterval = setInterval(() => {
        if (simulationTime <= 0) {
          clearInterval(simulationInterval);
          observer.next(null);
          observer.complete();
          this.simulations.delete(userId);
          return;
        }

        const randomMatch = this.getRandomMatch(userMatches);
        this.simulateGoal(randomMatch);
        observer.next(userMatches);

        simulationTime -= GOAL_INTERVAL;
      }, GOAL_INTERVAL);

      this.intervals.set(userId, simulationInterval);
    });
  }

  public stopSimulation(userId: string): void {
    clearInterval(this.intervals.get(userId)!);
    this.simulations.delete(userId);
  }
}
