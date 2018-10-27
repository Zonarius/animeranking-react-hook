import React from 'react';
import './Home.css';

import { Container } from 'bloomer/lib/layout/Container';
import { Columns } from 'bloomer/lib/grid/Columns';
import { Column } from 'bloomer/lib/grid/Column';
import { Card } from 'bloomer/lib/components/Card/Card';
import { CardImage } from 'bloomer/lib/components/Card/CardImage';
import { Image } from 'bloomer/lib/elements/Image';
import { CardContent } from 'bloomer/lib/components/Card/CardContent';
import { Content } from 'bloomer/lib/elements/Content';
import { Title } from 'bloomer/lib/elements/Title';

import { Link } from 'react-router-dom';
import { Section } from 'bloomer/lib/layout/Section';

export default function Home({ node }) {
  const years = node.children.elements
    .filter(child => child.fields.__typename === 'year')
    .sort(byYear)
    .map(YearCard);

  return (
    <Section>
      <Container className="years">
        <Columns>
          {years}
        </Columns>
      </Container>
    </Section>
  )
}

function byYear(a, b) {
  return b.fields.name.localeCompare(a.fields.name);
}

function YearCard({ uuid, path, fields }) {
  return (
    <Column isSize="1/3" key={uuid}>
      <Link to={path}>
        <Card>
          <CardImage>
            <Image src={fields.image.path} />
          </CardImage>
          <CardContent>
            <Content className="has-text-centered">
              <Title>{fields.name}</Title>
            </Content>
          </CardContent>
        </Card>
      </Link>
    </Column>
  )
}