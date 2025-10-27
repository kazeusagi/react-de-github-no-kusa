import { Kusa } from './Kusa/Kusa';

export function KusaContainer() {
  return (
    <table>
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
