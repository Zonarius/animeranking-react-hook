import { useEffect } from 'react';
import webrootQuery from './queries/webroot';
import { createSharedState } from 'react-hook-shared-state';

export const [useCurrentNode, setCurrentNode] = createSharedState({})

export function useWebroot(path) {
  const node = useCurrentNode();

  useEffect(() => {
    fetchGraphQl('animeranking', webrootQuery, { path })
      .then(setCurrentNode);
  }, [path])

  return node;
}

function fetchGraphQl(project, query, variables) {
  return fetch(`/api/v1/${project}/graphql`, {
    method: "POST",
    body: JSON.stringify({ query, variables })
  })
    .then(it => it.json())
    .then(it => {
      if (it.error) {
        throw new Error(it.error);
      } else {
        return it.data;
      }
    });
}