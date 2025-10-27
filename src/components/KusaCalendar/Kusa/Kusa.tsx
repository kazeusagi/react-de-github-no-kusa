import { styles } from './Kusa.css';

type Props = {
  intensity?: 0 | 1 | 2 | 3 | 4;
};

export function Kusa({ intensity = 0 }: Props) {
  return <td className={styles.td({ intensity: intensity })} />;
}
