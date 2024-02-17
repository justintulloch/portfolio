import React from "react";
import CardSection from "../_components/card-section";
import Header from "../_components/header";

export default function Page() {
  return (
    <div>
      <Header className="content" />
      <CardSection className="content mt-12 md:mt-16 lg:mt-20" />
    </div>
  );
}
