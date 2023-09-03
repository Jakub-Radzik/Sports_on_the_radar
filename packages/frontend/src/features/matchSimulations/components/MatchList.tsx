import { observer } from 'mobx-react';
import matchesStore from '../../../store/matchesStore';
import { MatchRow } from './MatchRow';

export const MatchList = observer(() => {
  return (
    <>
      {matchesStore.matches.map((match) => (
        <MatchRow
          key={match.id}
          homeTeam={match.homeTeam}
          awayTeam={match.awayTeam}
          homeTeamScore={match.homeTeamScore}
          awayTeamScore={match.awayTeamScore}
        />
      ))}
    </>
  );
});
