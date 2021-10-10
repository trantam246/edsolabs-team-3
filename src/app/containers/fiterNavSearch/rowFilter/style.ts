import styled from 'styled-components/macro';
export const RowFilter = styled.div`
  padding: 0px 12px 12px 16px;
  margin-top: 12px;
  border-bottom: 1px solid #45484f;
  :last-child {
    border-bottom: none;
  }
`;
export const TitleItem = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  & > div {
    & > img {
      transition: 0.3s all ease-in-out;
    }
  }
`;
export const ContentItem = styled.div`
  overflow-y: auto;
  max-height: 130px;
  margin-right: 4px;

  ::-webkit-scrollbar {
    width: 4px;
    background-color: #45484f;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #74767b;
    border-radius: 3px;
  }
  & > div {
    padding: 12px 0px 0px 0px;
    display: flex;
    justify-content: start;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #fff;
    & > div {
      margin-right: 16px;
      & > input {
        background-color: #dba83d;
        cursor: pointer;
      }
    }
  }
`;
