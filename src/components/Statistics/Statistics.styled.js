import styled from 'styled-components';

export const Section = styled.section`
  background-color: #fff;
  width: 600px;
  text-align: center;
  justify-content: center;
  margin: auto;
  margin-bottom: 50px;
`;
export const TitleUploadStats = styled.h2`
  padding: 60px;
  color: gray;
`;

export const ListStats = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 0;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const ItemStats = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: red;
  margin: 0;
  padding: 10px;
`;

export const LabelStats = styled.span`
  font-size: 24px;
  color: white;
`;
export const Percentage = styled.span`
  color: white;
`;
