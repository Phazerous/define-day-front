import IDef from '../../interfaces/IDef';
import INewDef from '../../interfaces/INewDef';
import DefinitionEditable from '../definition-editable/definition-editable';
import styles from './definition-section-editable.module.scss';

interface sectionProps {
  defs: IDef[];
  onDefChange: (id: number, newText: string) => void;
  onDelete: (id: number) => void;

  newDefs: INewDef[];
  onNewDefCreate: () => void;
  onNewDefChange: (id: string, newText: string) => void;
  onNewDefDelete: (id: string) => void;
}

export default function DefinitionSectionEditable({
  defs,
  newDefs,
  onDefChange,
  onDelete,
  onNewDefCreate,
  onNewDefChange,
  onNewDefDelete,
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

        {newDefs.map((def, idx) => (
          <DefinitionEditable
            onDefChange={(newText: string) => onNewDefChange(def.id, newText)}
            onDelete={() => onNewDefDelete(def.id)}
            key={def.id}
            text={def.text}
            order={defs.length + idx + 1}
          />
        ))}

        <button
          className={styles.add}
          onClick={onNewDefCreate}>
          Add
        </button>
      </div>
    </>
  );
}
