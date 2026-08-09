import { mockUser } from "../data";
import type { User } from "../types";
import { delay } from "./latency";

export async function fetchCurrentUser(): Promise<User> {
  await delay(150);
  return mockUser;
}

export async function signIn(): Promise<User> {
  await delay(500);
  return mockUser;
}
