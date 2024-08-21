import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <Wrapper>
      <SuperHeader>
        <Row>
          {UniversalActionGroupElement}
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <LaptopMainHeader>
        {UniversalActionGroupElement}
        <Logo />
        <CallToSubscribeContainer>
          <Button>Subscribe</Button>
          <LoginLink href="">Already a subscriber?</LoginLink>
        </CallToSubscribeContainer>
      </LaptopMainHeader>
      <MobileMainHeader>
        <Logo />
      </MobileMainHeader>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  --main-header-top-margin: clamp(32px, 10.7vw - 11.2px, 48px);
  @media ${QUERIES.laptopAndUp} {
    --main-header-top-margin: 16px;
  }

  --main-header-laptop-display: none;
  @media ${QUERIES.laptopAndUp} {
    --main-header-mobile-display: none;
    --main-header-laptop-display: unset;
  }

  @media ${QUERIES.laptopAndUp} {
    --super-header-display: none;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  display: var(--super-header-display, block);
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const UniversalActionGroup = styled(ActionGroup)``;

const UniversalActionGroupElement = (
  <UniversalActionGroup>
    <button>
      <Search size={24} />
    </button>
    <button>
      <Menu size={24} />
    </button>
  </UniversalActionGroup>
);

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  margin-top: var(--main-header-top-margin);
  margin-bottom: clamp(48px, 16vw - 16px, 72px);
`;

const LaptopMainHeader = styled(MainHeader)`
  justify-content: space-between;
  display: var(--main-header-laptop-display, flex);
`;

const MobileMainHeader = styled(MainHeader)`
  justify-content: center;
  display: var(--main-header-mobile-display, flex);
`;

const CallToSubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const LoginLink = styled.a`
  text-decoration: underline;
  font-style: italic;
  color: var(--color-gray-900);
  font-size: ${14 / 16}rem;
`;

export default Header;
