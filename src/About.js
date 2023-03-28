import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";
import styled from "styled-components";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Trezea:",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
      <Wrapper>
      <div className="container">
        <div id="about-data-para">
        <h2>
          This project is created by:
          </h2>
          <br />
          <h3>
            Goivnd Bailudkar
          </h3>
          <br />
          <h3>
            Akshad Dhole
          </h3>
          <br />
          <h3>
            Vijay Mote
          </h3>
          <br />
          <h3>
            Vedant Bhonsle
          </h3>
          <br />
          <h3>
            Aman Singh
          </h3>
          </div>
      </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid{
      gap: 10rem;
  }

  figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(229, 144, 2, 1);
  }
}

`; 

export default About;
