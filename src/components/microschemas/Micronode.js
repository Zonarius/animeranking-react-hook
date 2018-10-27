import React from 'react';
import Reference from './Reference';
import Tier from './Tier';

const Components = {
    reference: Reference,
    tier: Tier
}

export default function Micronode({data}) {
    const Comp = Components[data.__typename];
    return <Comp node={data} />
}