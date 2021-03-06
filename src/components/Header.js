import React from 'react';
import { HeroBody } from 'bloomer/lib/layout/Hero/HeroBody';
import { Container } from 'bloomer/lib/layout/Container';
import { Title } from 'bloomer/lib/elements/Title';
import { Hero } from 'bloomer/lib/layout/Hero/Hero';
import { Breadcrumb } from 'bloomer/lib/components/Breadcrumb/Breadcrumb';
import { BreadcrumbItem } from 'bloomer/lib/components/Breadcrumb/BreadcrumbItem';
import { useCurrentNode } from '../api';

export default function Header() {
  return (
    <Hero isColor="primary" className="header">
      <HeroBody>
        <Container>
          <Title isSize={1}>Anime Ranking</Title>
          <MyBreadCrumb />
        </Container>
      </HeroBody>
    </Hero>
  )
}

function MyBreadCrumb() {
  const node = useCurrentNode();
  return (
    <Breadcrumb>
      <ul>
        <BreadcrumbItem></BreadcrumbItem>
      </ul>
    </Breadcrumb>
  )
}