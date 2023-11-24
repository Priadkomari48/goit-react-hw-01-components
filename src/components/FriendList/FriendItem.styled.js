import styled from 'styled-components';

export const FriendCard = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  list-style: none;
  gap: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  padding: 15px;
  margin: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
`;

export const Status = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const PhotoFriend = styled.img`
  border-radius: 4px;
  border: 2px solid rgb(128, 128, 128);
`;
export const NameFriend = styled.span`
  font-style: 24px;
`;
