export default async function Page({ searchParams }: { searchParams: { page?: string } }) {
  const page = parseInt(searchParams.page ?? '1', 10);
  const limit = 10;

  const data = await fetch(`https://shop.api.onliner.by/products/xi1512512glbk/positions`);
  const mobiles = await data.json();

  return (
    <div>
      <ul>
        {mobiles.positions.primary.map((post: any) => (
          <li key={post.id}>{post.position_price.amount}</li>
        ))}
      </ul>
    </div>
  );
}
