import { observer } from 'mobx-react';
import matchesStore from '../../../store/matchesStore';

export const GoalsCounter = observer(() => {
  return <p>Total goals: {matchesStore.totalGoals}</p>;
});
