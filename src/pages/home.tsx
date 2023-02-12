import WordPanel from '../ui/word-panel/WordPanel';

import dummyWords from '../../db/data';

export default function HomePage() {
  const words = dummyWords;

  return (
    <>
      <WordPanel words={words} />
    </>
  );
}
