import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('66cd5ad900068dec136b').setKey('27ccede081e6556b112465229b34008b59be337c32940a71b7e1d0c7302ebca6f9ca6c929629a80c595ad312ba46d508db93ac26379b6ce4906125a995f688a08e59ba5e714acad1ed1905088b374d8a9ce99c0de74df616e76494a430e4309ca08b331192ef2c41583d228eeede09ec27b3a20ce68e567786f5a25d47df43dd');

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
