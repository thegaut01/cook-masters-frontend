
import { createClient } from "next-sanity";

const client = createClient({
   projectId: process.env.SANITY_ID,
   dataset: 'production',
   apiVersion: '1',
   token: '',
   useCdn: true,
})

export default client;