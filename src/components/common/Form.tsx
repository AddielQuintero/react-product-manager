import { FormProps } from "@/types"

export const CustomForm = (props: FormProps): JSX.Element => {
  return (
    <form
      className={props.className}
      onSubmit={props.onSubmit}
      action={props.action}
      method={props.method}
    >
      {props.children}
    </form>
  )
}
