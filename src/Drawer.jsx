import styled from 'styled-components';

const Drawer = styled.div`
  position: fixed;
  padding: 20px;
  transform: translateX(100%);
  top: 0;
  bottom: 0;
  right: 0;
  visibility: hidden;
  /* margin-right: -100%; */
  /* display: none; */
  box-shadow:  -2px 1px 10px 2px #5c5c5c6b;
  width: 350px;
  border-right: 1px solid #ccc;
  background-color: #fff;
`;

export default Drawer;
