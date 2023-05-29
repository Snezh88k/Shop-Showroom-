import React from "react";
import styles from "./SizeTable.module.css";

interface SizeTableProps {
  onClick?: () => void;
}
export default function SizeTable({ onClick }: SizeTableProps) {
  return (
    <div onClick={onClick} className={styles.wrapper}>
      <aside onClick={() => null} className={styles.table}>
        <table>
          <tr className={styles.ass}>
            <th>RUS</th>
            <th>INT</th>
            <th>Обхват талии</th>
            <th>Обхват бедер</th>
          </tr>
          <tr className={styles.firstRow}>
            <td></td>
            <td>производитель</td>
            <td>см</td>
            <td>см</td>
          </tr>
          <tr>
            <td>40/42</td>
            <td>P</td>
            <td>62-66</td>
            <td>88-92</td>
          </tr>
          <tr>
            <td>40/42</td>
            <td>XS</td>
            <td>62-66</td>
            <td>88-92</td>
          </tr>
          <tr>
            <td>42/44</td>
            <td>S</td>
            <td>66-70</td>
            <td>92-96</td>
          </tr>
          <tr>
            <td>44/46</td>
            <td>M</td>
            <td>70-74</td>
            <td>96-100</td>
          </tr>
          <tr>
            <td>46/48</td>
            <td>L</td>
            <td>74-78</td>
            <td>96-100</td>
          </tr>
          <tr>
            <td>48/50</td>
            <td>XL</td>
            <td>78-82</td>
            <td>104-108</td>
          </tr>
        </table>
      </aside>
    </div>
  );
}
