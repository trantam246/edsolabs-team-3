import { Container } from 'reactstrap';
import styled from 'styled-components/macro';
const CopyRightFooter = styled.div`
  height: 6.1rem;
  background-color: #13171f;
  margin-top: 4rem;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.1rem;
  color: #74767b;
  .container {
    height: 100%;
  }
  .copyright {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    margin-bottom: 0;
  }
  .right {
    margin-right: 1.6rem;
  }
  .left {
    margin-left: 1.6rem;
  }
  @media screen and (max-width: 575px) {
    height: 9rem;
    .copyright {
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`;
const CopyRight = () => {
  return (
    <CopyRightFooter>
      <Container>
        <div className="copyright">
          <p>© 2021 DeFi For You. All rights reserved.</p>
          <p>
            <span className="right">Terms of Service</span> |{' '}
            <span className="left">Privacy Policy</span>
          </p>
        </div>
      </Container>
    </CopyRightFooter>
  );
};

export default CopyRight;
