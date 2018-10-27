import React from 'react';
import { Media } from 'bloomer/lib/components/Media/Media';
import { MediaLeft } from 'bloomer/lib/components/Media/MediaLeft';
import { Image } from 'bloomer/lib/elements/Image';
import { MediaContent } from 'bloomer/lib/components/Media/MediaContent';
import { Title } from 'bloomer/lib/elements/Title';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';

export default function Reference({ node }) {
  return <Anime node={node.reference} />
}

Reference.mesh = {
  schema: "reference"
}

function Anime({ node }) {
  return (
    <Media>
      <MediaLeft>
        <Image src={`/api/v1/animeranking/nodes/${node.uuid}/binary/thumbnail`} />
      </MediaLeft>
      <MediaContent>
        <Title>
          <a href={`https://myanimelist.net/anime/${node.fields.malId}`}>
            {node.fields.name}
          </a>
        </Title>
        <Subtitle>MAL Score: {node.fields.malScore}</Subtitle>
      </MediaContent>
    </Media>
  );
}