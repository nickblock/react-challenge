import { FC, FormEvent, useState } from 'react';

type LoginFormProps = {
  submitState: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: FC<LoginFormProps> = ({ submitState }: LoginFormProps) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Code to handle login goes here
    submitState(true);
  }

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )

}
export default LoginForm;