import React from "react";
import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div>
      <Layout>
        <h1> This is the Login page! </h1>
        <LoginForm />
      </Layout> 
    </div>
  );
};

export default Login;