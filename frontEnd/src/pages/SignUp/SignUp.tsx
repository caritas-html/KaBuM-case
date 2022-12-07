import React from "react";
import Header from "../../components/Header/Header";
import MainBlock from "../../components/MainBlock/MainBlock";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export const SignUp = () => {
  return (
    <>
      <Header />
      <div className="background_wrapper">
        <MainBlock>
          <RegisterForm />
        </MainBlock>
      </div>
    </>
  );
};
