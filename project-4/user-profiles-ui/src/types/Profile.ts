import type { ProfileType } from "./ProfileType";

export type Profile = {
  id: number;
  username: string;
  email: string;
  photo: string;
  profileType: ProfileType;
};