import IDef from '../../interfaces/IDef';
import Definition from '../definition/Definition';
import styles from './definition-section.module.scss';

interface sectionProps {
  defs: IDef[];
}

export default function DefinitionSection({ defs }: sectionProps) {
  return (
    <>
      <div className={styles.defList}>
        {defs.map((def, idx) => (
          <Definition
            key={def.id}
            text={def.text}
            order={idx + 1}
          />
        ))}
      </div>
    </>
  );
}
