import styled from 'styled-components';

export const UserWrapper = styled.div`
  width: 250px;

  padding-top: 30px;
  margin: 0 auto;
  margin-bottom: 16px;

  background-color: var(--color-white);
  box-shadow: var(--shadow-color-primery);
  border-radius: 5px;
  overflow: hidden;
`;
export const UserDescription = styled.div`
  text-align: center;
`;
export const UserAvatar = styled.img`
  display: block;
  width: 100px;
  height: 100px;

  margin: 0 auto;
  margin-bottom: 20px;

  border-radius: 50%;
`;
export const Username = styled.p`
  margin-bottom: 10px;

  font-weight: 500;
  font-size: 20px;
`;
export const Usertag = styled.p`
  margin-bottom: 10px;

  font-size: 14px;
  color: var(--color-primery-text);
`;
export const UserLocation = styled.p`
  margin-bottom: 25px;

  font-size: 16px;
  color: var(--color-primery-text);
`;
export const Stats = styled.ul`
  display: flex;

  background-color: var(--background-color-primery);
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 83px;
  height: 70px;

  border-top: 1px solid var(--background-color);
  border-right: 1px solid var(--background-color);

  :last-child {
    border-right: none;
  }
`;
export const Label = styled.span`
  margin-bottom: 5px;

  color: var(--color-primery-text);
  font-size: 14px;
`;
export const Quantity = styled.span`
  font-weight: 700;
  letter-spacing: -0.05em;
`;
