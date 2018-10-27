const images = ["fall", "spring", "summer", "winter"]
  .reduce(
    (res, season) => ({...res, [season]: require(`./images/${season}.jpg`)}),
    {}
  )

export default images;