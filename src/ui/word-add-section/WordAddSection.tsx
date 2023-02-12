import styles from './word-add-section.module.scss';

interface sectionProps {
  onAdd: () => void;
}

export default function WordAddSection({ onAdd }: sectionProps) {
  return (
    <>
      <div className={styles.wordAddSection}>
        <button
          className={styles.add}
          onClick={onAdd}>
          Create a new word
        </button>
      </div>
    </>
  );
}
