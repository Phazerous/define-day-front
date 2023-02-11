import IDef from '../../interfaces/IDef';
import DefinitionEditable from '../definition-editable/definition-editable';
import Definition from '../definition/Definition';
import styles from './definition-section.module.scss';

interface sectionProps {
  defs: IDef[];
  onDefChange: (id: number, newText: string) => void;
  onDelete?: () => void;
}

export default function DefinitionSectionEditable({
  defs,
  onDefChange,
  onDelete,
}: sectionProps) {
  return (
    <>
      <div className={styles.defList}>
        {defs.map((def, idx) => (
          <DefinitionEditable
            onDefChange={(newText: string) => onDefChange(def.id, newText)}
            key={def.id}
            text={def.text}
            order={idx + 1}
          />
        ))}
      </div>
    </>
  );
}
