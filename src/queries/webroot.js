export default `
query ($path: String) {
    node(path: $path) {
        path
        fields {
            __typename
        }
        ...Home
        ...Season
        ...Year
    }
}

fragment Home on Node {
  uuid
  children {
    elements {
      uuid
      path
      fields {
        __typename
        ... on year {
          name
          image {
            path
          }
        }
      }
    }
  }
}

fragment Season on Node {
  fields {
    ... on season {
      anime {
        __typename
        ... on reference {
          reference {
            uuid
            path
            fields {
              ... on anime {
                name
                malScore
                malId
              }
            }
          }
        }
        ... on tier {
          name
        }
      }
    }
  }
}

fragment Year on Node {
  fields {
    ... on year {
      spring {
        path
      }
      summer {
        path
      }
      fall {
        path
      }
      winter {
        path
      }
  }
  }
}
`