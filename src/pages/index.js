import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="bg-primary flex w-screen h-screen justify-center items-center">
        <Hero />
      </div>
    </Layout>
  );
}
