export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type FormProps = React.FormHTMLAttributes<HTMLFormElement>

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText?: string
  labelClassName?: string
}

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  labelText?: string
  labelClassName?: string
  maxLength?: number
  value?: string
}
