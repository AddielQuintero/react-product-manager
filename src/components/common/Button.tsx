import { ButtonProps } from "@/types"

export const CustomButton = (props: ButtonProps): JSX.Element => {
  return (
    <button
      type={props.type}
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
