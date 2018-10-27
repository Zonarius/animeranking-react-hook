import { useState, useEffect } from 'react';
import webrootQuery from './queries/webroot';

export function useWebroot(path) {
  const [result, setResult] = useState({});

  useEffect(() => {
    fetchGraphQl('animeranking', webrootQuery, { path })
      .then(setResult);
  }, [path])

  return result;
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