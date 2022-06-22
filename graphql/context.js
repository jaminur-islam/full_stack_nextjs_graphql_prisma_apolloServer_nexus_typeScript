//==============================crate context for ctx in graphql file ====================================//
import { db } from "../lib/dbFun";
export async function createContext() {
  return {
    db,
  };
}
