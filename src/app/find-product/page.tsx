export default async function Page() {
  const data = await fetch(`https://shop.api.onliner.by/products/xi1512512glbk/positions`);
  const mobiles = await data.json();

  return (
    <div>
      <ul>
        {/*eslint-disable  @typescript-eslint/no-explicit-any */}
        {mobiles.positions.primary.map((post: any) => (
          <li key={post.id}>{post.position_price.amount}</li>
        ))}
      </ul>
    </div>
  );
}
