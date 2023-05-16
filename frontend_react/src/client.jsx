import createClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'earyuxzc',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:
    'skcBdn6m2hlg3Z273ZzYmGriPhqeyaKjsOX6ADyKOFABmCbX5QhCLEgtExkileA5y1CW7fXppNi8aSsA7EryIgqugn55RRum8hoAc5bdIDiFeUJAZOXA6efdmmkuqwyG5pEiJJfBmJJBj2eq2lOIktWN2YsHRmcMmg2384pbkYEybBTINMam',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
