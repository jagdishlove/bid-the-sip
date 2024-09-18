import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAllItems } from "./action";

export default async function Home() {
  return (
    <main className="container mx-auto py-12 w-2/6">
      <h1 className="text-3xl text-center mb-4">Post an item</h1>
      <form className="border p-4" action={getAllItems}>
        <Input name="name" placeholder="Name your item" />
        <Button className="mx-auto mt-3 mb-3 flex w-1/5" type="submit">
          Post Item
        </Button>
      </form>
    </main>
  );
}
