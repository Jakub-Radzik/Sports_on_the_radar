import { Card } from '../../../components/ui/Card';
import { GoalsCounter } from './GoalsCounter';
import { MatchList } from './MatchList';
import { SimulationButton } from './SimulationButton';

export const SimulationCard = () => {
  return (
    <Card title={'Katar 2023'}>
      <SimulationButton />
      <MatchList />
      <GoalsCounter />
    </Card>
  );
};
