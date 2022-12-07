import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import MainBlock from "../../components/MainBlock/MainBlock";
import "../../index.css";

function Login() {
  return (
    <>
      <Header />
      <div className="background_wrapper">
        <MainBlock>
          <LoginForm />
        </MainBlock>
      </div>
    </>
  );
}

export default Login;
