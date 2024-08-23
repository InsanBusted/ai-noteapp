import {Pinecone} from '@pinecone-database/pinecone';

const apiKey = process.env.PINECONE_API_KEY

if(!apiKey) {
    throw Error("PINECONE_API_KEY is not set")
}


const pc = new Pinecone({
    apiKey: 'bb8c5d50-6078-4600-9f08-0014d4db6a34'
  });



export const noteIndex = pc.Index("ai-noteapp")