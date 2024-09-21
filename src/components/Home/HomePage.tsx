import { FC, useState } from 'react';
import LoginForm from '../login/LoginBox';
import DashBoard from '../dashboard/DashBoard';
import ReactTypescriptTemplateLogo from '../../assets/images/react-typescript-template.png';

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
      <img
        src={ReactTypescriptTemplateLogo}
        width={500}
        className="mx-auto"
        alt="React-Typescript-Template"
      />
      {page}
    </div>
  );
};

export default HomePage;
