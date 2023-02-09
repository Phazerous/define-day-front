import WordPanel from '../components/WordPanel';
import wordsData from '../db/data';
import IWord from '../interfaces/IWord';

interface props {
  words: IWord[];
}

export default function HomePage({ words }: props) {
  return (
    <>
      <WordPanel words={words} />
    </>
  );
}

export async function getServerSideProps() {
  const words = wordsData;

  return { props: { words } };
}
