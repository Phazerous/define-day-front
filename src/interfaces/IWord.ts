import IDef from './IDef';

export default interface IWord {
  id: number;
  title: string;
  defs: IDef[];
  dateOfStudy: Date;
}
