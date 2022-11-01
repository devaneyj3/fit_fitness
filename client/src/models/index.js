// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ClassEnrolls, Class, User, Instructor, UserClass } = initSchema(schema);

export {
  ClassEnrolls,
  Class,
  User,
  Instructor,
  UserClass
};