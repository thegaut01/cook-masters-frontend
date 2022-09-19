
import { createClient } from "next-sanity";

const client = createClient({
   projectId: process.env.SANITY_ID,
   projectId: 'kaupt7ej', // temporary solution .env is not deployed
   dataset: 'production',
   apiVersion: '1',
   token: '',
   useCdn: true,
})

export default client;