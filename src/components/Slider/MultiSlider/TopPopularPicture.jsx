import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import SliderMultiMain from "./SliderMultiMain";

export default function TopPopularPicture() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/exercisepost/popular`)
      .then(({ data }) => setPopular(data.data));
  }, []);

  console.log(popular);

  return (
    <>
      <SliderMultiMain data={popular} categories={"home"} />
    </>
  );
}
