import { signOut } from "@/auth";
import { Button } from "./ui/button";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button
        className="bg-gradient-to-r from-pink-500  to-blue-500"
        type="submit"
      >
        Sign Out
      </Button>
    </form>
  );
}
