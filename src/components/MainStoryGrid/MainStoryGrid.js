import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <VerticalStoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <StoryPreviewWrapper key={story.id}>
              <SecondaryStory  {...story} />
            </StoryPreviewWrapper>
          ))}
        </VerticalStoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <HorizontalOnTabletStoryList>
          {OPINION_STORIES.map((story, index) => (
            <StoryPreviewWrapper key={story.id}>
              <OpinionStory key={story.id} {...story} />
            </StoryPreviewWrapper>
          ))}
        </HorizontalOnTabletStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'main-story       secondary-stories'
      'advertisement    advertisement'
      'opinion-stories  opinion-stories';
    gap: 48px 0;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 5fr 4fr 3fr;
    grid-template-areas:
      'main-story   secondary-stories   opinion-stories'
      'main-story   advertisement       advertisement';
    gap: 0;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
    margin-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
    margin-right: 16px;
  }
`;

const VerticalStoryList = styled.div`
  display: flex;
  flex-direction: column;
  --story-bottom-border: 1px solid var(--color-gray-300);
  --story-padding: 16px;
`;

const HorizontalOnTabletStoryList = styled(VerticalStoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;
    --story-bottom-border: none;
    --story-padding: 0;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  /* Optical alignment */
  margin-top: -8px;
`;

const StoryPreviewWrapper = styled.div`
  flex: 1;
  &:not(:first-of-type) {
    padding-top: var(--story-padding);
  }

  &:not(:last-of-type) {
    padding-bottom: var(--story-padding);
    border-bottom: var(--story-bottom-border);
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    border-top: 1px solid var(--color-gray-300);
    padding-top: 16px;
    margin-top: 16px;

    align-self: end;
  }
`;

export default MainStoryGrid;
