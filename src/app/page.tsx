import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      Home
      <Link href={'/find-product'}>Найти продукты</Link>
    </div>
  );
}
