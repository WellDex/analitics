export default interface ICustomField {
  errorText: string;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value: string | undefined;
  setValue: (a: any) => void;
}
