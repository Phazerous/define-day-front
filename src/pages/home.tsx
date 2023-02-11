import WordPanel from '../ui/word-panel/WordPanel';

import dummyWords from '../../db/data';

export default function Home() {
  const words = dummyWords;

  return (
    <>
      <WordPanel words={words} />
    </>
  );
}
