import React from 'react';
import { Title } from 'bloomer/lib/elements/Title';

export default function Tier({ node }) {
  return <Title className="tier-title">{node.name}</Title>
}
