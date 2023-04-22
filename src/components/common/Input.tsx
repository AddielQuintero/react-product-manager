type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const CustomInput = (props: InputProps): JSX.Element => {
  // console.log(`dentro del input: ${props.value}`)
  return (
    <input
      id={props.id}
      name={props.name}
      type={props.type}
      value={props.value}
      onClick={props.onClick}
      onChange={props.onChange}
      disabled={props.disabled}
      className={props.className}
      placeholder={props.placeholder}
    >
      {props.children}
    </input>
  )
}
