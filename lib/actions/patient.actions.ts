import { ID,Query } from "node-appwrite";
import { parseStringify } from "../utils";
import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  try {
    // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
    const newuser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    return parseStringify(newuser);
  } catch (error: any) {
    // Check existing user
    if (error && error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      return existingUser?.users[0];
    }
    console.error("An error occurred while creating a new user:", error);
  }
};

export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};

export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
      // Upload file ->  // https://appwrite.io/docs/references/cloud/client-web/storage#createFile
      let file;
      if (identificationDocument) {
        const inputFile = new File(
          [identificationDocument?.get("blobFile") as Blob],
          identificationDocument?.get("fileName") as string
          );
          
          

          file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
      }

      // Create new patient document -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
      const newPatient = await databases.createDocument(
          DATABASE_ID!,
          PATIENT_COLLECTION_ID!,
          ID.unique(),
          {
              identificationDocumentId: file?.$id || null,
              identificationDocumentUrl: `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file?.$id}/view?project=${PROJECT_ID}`,
              ...patient,
          }
      );

      return parseStringify(newPatient);
  } catch (error) {
      console.error("An error occurred while creating a new patient:", error);
  }
};  