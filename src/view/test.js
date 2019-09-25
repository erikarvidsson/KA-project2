import React from "react";
import Layout from "../components/Layout";
import SearchPage from "../components/SearchPage";
import Modal from "../components/Modal";
import { P } from "../components/typo";

const Test = () => {
  return (
    <div>
      <Layout>
        <Modal>
          <P text="hej hej hej"></P>

        </Modal>
      </Layout>
    </div>
  );
};

export default Test;
