import IDef from '../../interfaces/IDef';
import DefinitionEditable from '../definition-editable/definition-editable';
import Definition from '../definition/Definition';
import styles from './definition-section.module.scss';

//TO UNIFY
interface sectionProps {
  defs: IDef[];
  isEditable: boolean;
  onDelete?: () => void;
}

export default function DefinitionSection({
  defs,
  isEditable,
  onDelete,
}: sectionProps) {
  return (
    <>
      <div className={styles.defList}>
        {defs
          ? defs.map((def, idx) => {
              if (isEditable)
                return (
                  <DefinitionEditable
                    key={idx}
                    text={def.text}
                    order={idx + 1}
                  />
                );
              // REMOVE KEY BY IDX
              else
                return (
                  <Definition
                    key={idx}
                    text={def.text}
                    order={idx + 1}
                  />
                );
            })
          : null}
      </div>
    </>
  );
}
