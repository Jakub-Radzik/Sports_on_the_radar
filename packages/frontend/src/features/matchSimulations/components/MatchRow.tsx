import { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  matchRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0 5px',
  },
};

type MatchRowProps = {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
};

export const MatchRow = ({ homeTeam, awayTeam, homeScore, awayScore }: MatchRowProps) => (
  <div style={styles.matchRow}>
    <p>
      {homeTeam} vs {awayTeam}
    </p>
    <p>
      {homeScore}:{awayScore}
    </p>
  </div>
);
