import wordsData from '../../db/data';
import IWord from '../interfaces/IWord';
import WordPanel from '../ui/word-panel/WordPanel';

interface props {
  words: IWord[];
}

export default function HomePage() {
  const words = wordsData;

  return (
    <>
      <WordPanel words={words} />
    </>
  );
}
