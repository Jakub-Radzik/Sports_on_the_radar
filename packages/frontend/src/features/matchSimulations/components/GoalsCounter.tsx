type GoalsCounterProps = {
  count: number;
};

export const GoalsConter = ({ count }: GoalsCounterProps) => {
  return <p>Total goals: {count}</p>;
};
