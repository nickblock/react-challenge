import { FC, FormEvent, useState } from 'react';

type LoginFormProps = {
  submitState: React.Dispatch<React.SetStateAction<boolean>>;
}

type InputBoxProps = {
  label: string,
  prompt: string
  setSubmitEnabled: React.Dispatch<React.SetStateAction<boolean>>
}
const InputBox: FC<InputBoxProps> = (props: InputBoxProps) => {
  const [value, setValue] = useState(props.prompt)
  const [focused, setFocused] = useState(false)

  function onFocus() {
    if (!focused) {
      setFocused(true)
      setValue('')
    }
  }
  return (
    <label>
      {props.label}:
      <input type="text" value={value} onFocus={onFocus} onChange={e => {
        setValue(e.target.value); props.setSubmitEnabled(true)
      }} />
    </label>
  )
}

const LoginForm: FC<LoginFormProps> = ({ submitState }: LoginFormProps) => {

  const [submitEnabled, setSubmitEnabled] = useState(false)

  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    submitState(true);
  }

  return (
    <div className="login-form">
      <div className="login-title">
        <h1> Dashboard </h1>
        Welcome to the dashboard. Enter a valid username and password to proceed.
      </div>
      <div className="popup-inner">
        <form onSubmit={handleLogin}>
          <InputBox label='Username' prompt='usen@pass.com' setSubmitEnabled={setSubmitEnabled} />
          <InputBox label='Password' prompt='password' setSubmitEnabled={setSubmitEnabled} />
          <button type="submit" disabled={!submitEnabled} >Login</button>
        </form>
      </div>
    </div >
  )

}
export default LoginForm;