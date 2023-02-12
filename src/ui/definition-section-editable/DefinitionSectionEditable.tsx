import IDef from '../../interfaces/IDef';
import DefinitionEditable from '../definition-editable/definition-editable';
import styles from './definition-section-editable.module.scss';

interface sectionProps {
  defs: IDef[];
  onDefChange: (id: number | string, newText: string) => void;
  onDelete: (id: number | string) => void;
  onCreate: () => void;
}

export default function DefinitionSectionEditable({
  defs,
  onDefChange,
  onDelete,
  onCreate,
}: sectionProps) {
  return (
    <>
      <div className={styles.defList}>
        {defs.map((def, idx) => (
          <DefinitionEditable
            onDefChange={(newText: string) => onDefChange(def.id, newText)}
            onDelete={() => onDelete(def.id)}
            key={def.id}
            text={def.text}
            order={idx + 1}
          />
        ))}

        <button
          className={styles.add}
          onClick={onCreate}>
          Add
        </button>
      </div>
    </>
  );
}
