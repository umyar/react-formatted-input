declare module 'react-fmt-inpput' {
  export interface FormattedInputProps;
  export const FormattedInput = (FormattedInputProps) => React.ReactNode;
  export const defaultFormatter = (value: string, mask: string) => string;
  export const defaultParser = (value: string | null | undefined) => string;
}