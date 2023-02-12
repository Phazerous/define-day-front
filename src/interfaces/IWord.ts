import IDef from './IDef';

export default interface IWord {
  id: number;
  title: string;
  definitions: IDef[];
  created_at: string; // String in date format
}
