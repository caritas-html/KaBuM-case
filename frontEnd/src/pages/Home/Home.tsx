import LoginForm from "../../components/LoginForm/LoginForm";
import MainBlock from "../../components/MainBlock/MainBlock";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="background_wrapper">
        <MainBlock>
          <LoginForm />
        </MainBlock>
      </div>
    </>
  );
}

export default Home;
