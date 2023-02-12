import IDef from '../interfaces/IDef';
import INewDef from '../interfaces/INewDef';

export const convertDatestringToString = (dateString: string) => {
  const date = new Date(Date.parse(dateString));

  const months = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const month = months[date.getMonth()];

  return `${month} ${date.getDate()}, ${date.getFullYear()}`;
};

export const formatUpdatedWord = (
  wordId: number,
  wordTitle: string,
  defs: IDef[],
  newDefs: INewDef[]
) => {
  const updatedWord = {
    id: wordId,
    title: wordTitle,
    definitions: [
      ...defs,
      ...newDefs.map((def) => {
        return { text: def.text };
      }),
    ],
  };

  return updatedWord;
};

export const formatNewWord = (wordTitle: string, newDefs: INewDef[]) => {
  const newWord = {
    title: wordTitle,
    definitions: [
      ...newDefs.map((def) => {
        return def.text;
      }),
    ],
  };

  return newWord;
};
