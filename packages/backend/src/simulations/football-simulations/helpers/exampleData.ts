import { Match, MatchResult } from '../types/match';

const data: Match[] = [
  {
    id: 1,
    homeTeam: 'Germany',
    awayTeam: 'Poland',
  },
  {
    id: 2,
    homeTeam: 'Brazil',
    awayTeam: 'Mexico',
  },
  {
    id: 3,
    homeTeam: 'Argentina',
    awayTeam: 'Uruguay',
  },
];

export const initedData: MatchResult[] = data.map((match) => ({
  ...match,
  homeTeamScore: 0,
  awayTeamScore: 0,
}));
