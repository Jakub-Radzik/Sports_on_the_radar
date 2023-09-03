import { CSSProperties } from 'react';
import { MatchResult } from '../types/match';

const styles: Record<string, CSSProperties> = {
  matchRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0 5px',
  },
};

type MatchRowProps = Omit<MatchResult, 'id'>;

export const MatchRow = ({ homeTeam, awayTeam, homeTeamScore, awayTeamScore }: MatchRowProps) => (
  <div style={styles.matchRow}>
    <p>
      {homeTeam} vs {awayTeam}
    </p>
    <p>
      {homeTeamScore}:{awayTeamScore}
    </p>
  </div>
);
