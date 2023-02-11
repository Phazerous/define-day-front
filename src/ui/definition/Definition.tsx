interface defProps {
  text: string;
  order: number;
}

import styles from './definition.module.scss';

export default function Definition({ text, order }: defProps) {
  return (
    <>
      <div className={styles.defContainer}>
        <div>{order}</div>
        <div>{text}</div>
      </div>
    </>
  );
}
