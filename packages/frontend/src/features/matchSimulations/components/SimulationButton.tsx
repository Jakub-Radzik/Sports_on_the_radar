import { observer } from 'mobx-react';
import matchesStore from '../../../store/matchesStore';
import { SimulationState } from '../types/simulation';
import { useMatches } from '../hooks/useMatches';

export const SimulationButton = observer(() => {
  const { startSimulation, stopSimulation, initSimulation } = useMatches();

  const buttonText = () => {
    switch (matchesStore.simulationState) {
      case SimulationState.RUNNING:
        return 'Finish';
      case SimulationState.FINISHED:
        return 'Restart';
      case SimulationState.NOT_STARTED:
      default:
        return 'Start';
    }
  };
  const buttonAction = () => {
    switch (matchesStore.simulationState) {
      case SimulationState.NOT_STARTED:
        startSimulation();
        break;
      case SimulationState.RUNNING:
        stopSimulation();
        break;
      case SimulationState.FINISHED:
      default:
        initSimulation();
        startSimulation();
        break;
    }
  };

  return <input type="button" value={buttonText()} onClick={buttonAction} />;
});
