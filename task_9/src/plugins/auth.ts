import { useAuthUser } from "@/stores/auth";

export async function loginCheck() {
  await useAuthUser().checkIsLoggedIn();
}
