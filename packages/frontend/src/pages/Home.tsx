import { SimulationCard } from '../features/matchSimulations/components/SimulationCard';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SimulationCard />
    </div>
  );
}
