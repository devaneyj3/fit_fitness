import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ClassEnrollsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClassMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InstructorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserClassMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ClassEnrolls {
  readonly id: string;
  readonly enrolls?: number | null;
  readonly classID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ClassEnrolls, ClassEnrollsMetaData>);
  static copyOf(source: ClassEnrolls, mutator: (draft: MutableModel<ClassEnrolls, ClassEnrollsMetaData>) => MutableModel<ClassEnrolls, ClassEnrollsMetaData> | void): ClassEnrolls;
}

export declare class Class {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly capacity: number;
  readonly ClassEnrolls?: (ClassEnrolls | null)[] | null;
  readonly instructorID: string;
  readonly users?: (UserClass | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Class, ClassMetaData>);
  static copyOf(source: Class, mutator: (draft: MutableModel<Class, ClassMetaData>) => MutableModel<Class, ClassMetaData> | void): Class;
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly username: string;
  readonly phone: string;
  readonly photo?: string | null;
  readonly Classes?: (UserClass | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Instructor {
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly username: string;
  readonly phone: string;
  readonly photo?: string | null;
  readonly Classes?: (Class | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Instructor, InstructorMetaData>);
  static copyOf(source: Instructor, mutator: (draft: MutableModel<Instructor, InstructorMetaData>) => MutableModel<Instructor, InstructorMetaData> | void): Instructor;
}

export declare class UserClass {
  readonly id: string;
  readonly class: Class;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserClass, UserClassMetaData>);
  static copyOf(source: UserClass, mutator: (draft: MutableModel<UserClass, UserClassMetaData>) => MutableModel<UserClass, UserClassMetaData> | void): UserClass;
}