import React from 'react';
import { Section } from 'bloomer/lib/layout/Section';
import { Columns } from 'bloomer/lib/grid/Columns';
import { Column } from 'bloomer/lib/grid/Column';
import { Link } from 'react-router-dom';

import images from '../../images';
import { Card } from 'bloomer/lib/components/Card/Card';
import { CardImage } from 'bloomer/lib/components/Card/CardImage';
import { CardContent } from 'bloomer/lib/components/Card/CardContent';
import { Content } from 'bloomer/lib/elements/Content';
import { Title } from 'bloomer/lib/elements/Title';
import { Image } from 'bloomer/lib/elements/Image';
import { Container } from 'bloomer/lib/layout/Container';

import './Year.css';

export default function Year({ node }) {
  return (
    <Section>
      <Container>
        <Columns>
          <YearCard season="winter" node={node.fields.winter} />
          <YearCard season="spring" node={node.fields.spring} />
        </Columns>
        <Columns>
          <YearCard season="summer" node={node.fields.summer} />
          <YearCard season="fall" node={node.fields.fall} />
        </Columns>
      </Container>
    </Section>
  )
}

function YearCard({ season, node }) {
  return (
    <Column>
      <YearLink node={node}>
        <Card className="year">
          <CardImage>
            <Image src={images[season]} />
          </CardImage>
          <CardContent>
            <Content className="has-text-centered">
              <Title>{season}</Title>
            </Content>
          </CardContent>
        </Card>
      </YearLink>
    </Column>
  )
}

function YearLink({ node, children }) {
  if (node && node.path) {
    return <Link to={node.path}>{children}</Link>
  } else {
    return <span className="disabled">{children}</span>
  }
}