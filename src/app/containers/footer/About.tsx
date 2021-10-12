import styled from 'styled-components/macro';

const AboutFooter = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  .about {
    margin-top: 5.6rem;
    font-size: 1.4rem;
    &__title {
      font-weight: bold;
      color: #ffffff;
      padding-bottom: 2.4rem;
      margin: 0;
    }

    &__name {
      color: #dba83d;
      font-weight: 600;
      line-height: 1.7rem;
    }

    &__desc {
      font-family: 'Inter', sans-serif;
      line-height: 1.694rem;
      font-weight: 400;
      color: #9fa6b2;
    }
  }
`;
const About = () => {
  return (
    <AboutFooter>
      <div className="about">
        <p className="about__title">About DeFi For You</p>
        <p className="about__content">
          <span className="about__name">DeFi For You </span>
          <span className="about__desc">
            is a trading style of Miles Mann Limited registered office at 5
            Southgate Street, Gloucester, Gloucestershire, GL1 1TG1 Licensed
            authorised and regulated by the Financial Conduct Authority to
            exercise lender's rights and duties under a regulated credit
            agreement (excluding high-cost short-term credit, bill of sale
            agreement, and home collected credit agreement), and has the right
            to exercise lender's rights and duties under a regulated credit
            agreement (excluding high-cost short-term credit, bill of sale
            agreement, and home collected credit agreement)
          </span>
        </p>
      </div>
    </AboutFooter>
  );
};

export default About;
