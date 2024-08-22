import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const OpinionStory = ({
  id,
  title,
  author,
  avatar,
}) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper      >
        <Avatar alt="" src={avatar} />
        <AuthorAndTitle>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </AuthorAndTitle>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  --gap: 32px;
  --flexDirection: row;
  --justifyContent: space-between;
  --avatarOrder: 2;
  --authorAndTitleOrder: 1;

  @media ${QUERIES.tabletOnly} {
    --gap: 8px;
    --flexDirection: column;
    --justifyContent: auto;
    --avatarOrder: auto;
    --authorAndTitleOrder: auto;
  }

  color: var(--color-gray-900);
  display: flex;
  justify-content: space-between;
  gap: var(--gap);
  flex-direction: var(--flexDirection);
  justify-content: var(--justifyContent);
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  order: var(--avatarOrder);
`;

const AuthorAndTitle = styled.div`
  order: var(--authorAndTitleOrder);
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
