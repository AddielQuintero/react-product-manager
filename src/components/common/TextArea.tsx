type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  labelText?: string
  labelClassName?: string
  maxLength?: number
  value?: string
}

export const CustomTextArea = (props: TextareaProps): JSX.Element => {
  const textLength = props.value ? props.value.length : 0

  return (
    <div>
      <label htmlFor={props.id} className={props.labelClassName}>
        {props.labelText}
      </label>
      <textarea
        id={props.id}
        name={props.name}
        value={props.value}
        onClick={props.onClick}
        onChange={props.onChange}
        disabled={props.disabled}
        className={props.className}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
      />
      {props.maxLength && (
        <p className="text-sm text-gray-500">
          {props.maxLength - textLength} remaining characters.
        </p>
      )}
    </div>
  )
}
