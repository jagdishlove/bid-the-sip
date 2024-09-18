import { database } from "@/db/database";

export default async function Home() {
  const allItems = await database.query.items.findMany();
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-3xl">Items for sale</h1>
      <div className="flex gap-8 mt-3">
        {allItems.map((item) => {
          return (
            <div key={item.id} className="border flex flex-wrap p-6 w-60">
              <h1>{item.name}</h1>
            </div>
          );
        })}
      </div>
    </main>
  );
}
