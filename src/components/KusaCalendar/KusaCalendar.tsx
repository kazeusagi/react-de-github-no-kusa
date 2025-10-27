import { Kusa } from './Kusa';
import { styles } from './KusaCalendar.css';

export function KusaCalendar() {
  return (
    <table className={styles.table}>
      {Array.from({ length: 7 }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {Array.from({ length: 40 }).map((_, colIndex) => (
            <Kusa key={colIndex} />
          ))}
        </tr>
      ))}
    </table>
  );
}
