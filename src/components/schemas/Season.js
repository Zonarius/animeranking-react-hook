import React from 'react';
import { Section } from 'bloomer/lib/layout/Section';
import { Container } from 'bloomer/lib/layout/Container';
import Micronode from '../microschemas/Micronode';

export default function Season({ node }) {
  const animeCount = node.fields.anime
    .filter(anime => anime.__typename === 'reference')
    .length;
  return (
    <Section>
      <Container>
        <Section>
          {node.fields.anime.map((mn, i) => <Micronode key={i} data={mn}/>)}
        </Section>
        <Section>
          {animeCount} Anime gesamt
        </Section>
      </Container>
    </Section>
  );
}