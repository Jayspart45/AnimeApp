import { createContext } from "react";

export const ReviewContext = createContext();
export const CharacterContext = createContext();
export const AnimeContext = createContext();
export const LoginContext = createContext();

const Context = {
  ReviewContext,
  AnimeContext,
  CharacterContext,
  LoginContext,
};
export default Context;
