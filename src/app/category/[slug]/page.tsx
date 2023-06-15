'use client';

import { useQuery } from 'react-query';

import { getCategoryFilter } from '@/app/services/mealsApi';

interface CategoryProps {
  params: {
    slug: string;
  };
}

export default function Categoty({ params: { slug } }: CategoryProps) {
  const { data } = useQuery('filter-category', () => getCategoryFilter(slug));

  return (
    <div>
      <h1>category</h1>
    </div>
  );
}
