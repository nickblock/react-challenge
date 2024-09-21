import { FC, useState } from 'react';
import LoginForm from '../login/LoginBox';


const HomePage: FC = () => {

  const [submitted, setSubmitted] = useState(false)
  return (

    <LoginForm submitState={setSubmitted} />
  );
};

export default HomePage;
