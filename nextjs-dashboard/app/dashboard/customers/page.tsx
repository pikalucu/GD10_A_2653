import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      <p className="mt-4 text-gray-500">Customer management page coming soon.</p>
    </div>
  );
}
