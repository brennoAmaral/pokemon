import styled from "styled-components";

interface ModalProps{
  isOpen: boolean
}

export const Modal = styled.div`
  width: 100%;
  height: 590px;
  position: absolute;
  transition: 1s;
  bottom: ${({ isOpen }) => isOpen ? '0' : '-999999px'};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;