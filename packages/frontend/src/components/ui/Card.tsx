import { CSSProperties, PropsWithChildren } from 'react';

const styles: Record<string, CSSProperties> = {
  card: {
    border: '1px solid black',
    maxWidth: '300px',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardHeader: {
    padding: '5px',
    textAlign: 'center',
  },
};

type CardProps = PropsWithChildren<{
  title: string;
}>;

export const Card = ({ title, children }: CardProps) => {
  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <p>{title}</p>
      </div>
      {children}
    </div>
  );
};
