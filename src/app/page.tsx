import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { database } from "@/db/database";
import { bids as bidsSchema } from "@/db/schema";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const bids = await database.query.bids.findMany();
  return (
    <main className="container mx-auto py-12">
      <form
        action={async () => {
          "use server";
          await database.insert(bidsSchema).values({});
          revalidatePath("/");
        }}
      >
        <Input name="bids" placeholder="bids" />
        <Button type="submit">Submit bid</Button>
      </form>
      {bids.map((bid, index) => {
        return <h1 key={index}>{bid.id}</h1>;
      })}
    </main>
  );
}
