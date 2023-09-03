export type Match = {
  id: number;
  homeTeam: string;
  awayTeam: string;
};

export type MatchResult = Match & {
  homeTeamScore: number;
  awayTeamScore: number;
};
