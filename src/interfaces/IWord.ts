import IDef from './IDef';

export default interface IWord {
  title: string;
  defs: IDef[];
  id: number;
  dateOfStudy: Date;
}
