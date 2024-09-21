import { FC, useState } from 'react';
import LoginForm from '../login/LoginBox';
import DashBoard from '../dashboard/DashBoard';

const HomePage: FC = () => {

  const [submitted, setSubmitted] = useState(false)

  let page: any;

  if (submitted) {
    page = <DashBoard />
  }
  else {
    page = < LoginForm submitState={setSubmitted} />
  }
  return (

    <div>
      {page}
    </div>
  );
};

export default HomePage;
