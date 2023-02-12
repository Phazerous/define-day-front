import WordPanel from '../ui/word-panel/WordPanel';

import { getAllWords } from '../lib/wordApi';
import { useEffect, useState } from 'react';
import IWord from '../interfaces/IWord';
import { signout } from '../lib/authApi';
import Router from 'next/router';

export default function HomePage() {
  const [words, setWords] = useState<IWord[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [update, toggleUpdate] = useState<boolean>(true);

  useEffect(() => {
    getAllWords().then((res) => {
      setWords(res), setLoading(false);
    });
  }, [update]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h1
        onClick={() => {
          signout();
          Router.push('/login');
        }}>
        Temp
      </h1>
      {
        <WordPanel
          words={words}
          onUpdate={() => toggleUpdate(!update)}
        />
      }
    </>
  );
}
