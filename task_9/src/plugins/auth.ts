import { useAuthUser } from "@/store/auth";

export async function loginCheck() {
  await useAuthUser().checkIsLoggedIn();
}
