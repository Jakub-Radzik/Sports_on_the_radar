import { Card } from '../../../components/ui/Card';
import { GoalsConter } from './GoalsCounter';
import { MatchRow } from './MatchRow';

export const SimulationCard = () => {
  return (
    <Card title={'Katar 2023'}>
      <input type="button" value={'dasasdasd'} onClick={() => {}} />
      <MatchRow homeTeam={'Germany'} awayTeam={'Poland'} homeScore={0} awayScore={0} />
      <MatchRow homeTeam={'Germany'} awayTeam={'Poland'} homeScore={0} awayScore={0} />
      <MatchRow homeTeam={'Germany'} awayTeam={'Poland'} homeScore={0} awayScore={0} />
      <GoalsConter count={0} />
    </Card>
  );
};
