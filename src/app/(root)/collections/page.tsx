import React from "react";
import { db } from "@/lib/db";
import { collections, productCollections } from "@/lib/db/schema";
import { count, eq } from "drizzle-orm";
import Link from "next/link";
import { Card } from "@/components";

const CollectionsPage = async () => {
  const allCollections = await db
    .select({
      id: collections.id,
      name: collections.name,
      slug: collections.slug,
      productCount: count(productCollections.id),
    })
    .from(collections)
    .leftJoin(productCollections, eq(productCollections.collectionId, collections.id))
    .groupBy(collections.id);

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Summer Collections
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Explore our hand-picked selections of premium footwear and apparel, designed for performance and style.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        {allCollections.map((col) => (
          <Link
            key={col.id}
            href={`/products?collection=${col.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
          >
            <div className="aspect-[4/3] bg-gray-100 sm:aspect-none sm:h-96">
                <div className="flex h-full w-full items-center justify-center bg-dark-900 text-white transition-transform group-hover:scale-105">
                 <span className="text-2xl font-bold">{col.name.split(' ')[0]}</span>
                </div>
            </div>
            <div className="flex flex-1 flex-col space-y-2 p-4">
              <h3 className="text-xl font-bold text-gray-900">
                {col.name}
              </h3>
              <p className="text-sm text-gray-500">{col.productCount} Products</p>
              <div className="mt-auto pt-4 flex items-center text-sm font-medium text-blue-600">
                Shop the selection &rarr;
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {allCollections.length === 0 && (
        <div className="py-20 text-center text-gray-400">
          <p className="text-lg">No collections found. Run `npm run db:seed` to populate some.</p>
        </div>
      )}
    </main>
  );
};

export default CollectionsPage;
