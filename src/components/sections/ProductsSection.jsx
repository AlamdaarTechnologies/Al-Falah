import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ProductCard from '../common/ProductCard';
import Button from '../common/Button';
import { products } from '../../data/products';
import { divisions } from '../../data/solutions';

export default function ProductsSection({ onOpenProductDetails, initialDivisionFilter = 'all' }) {
  const [selectedDivision, setSelectedDivision] = useState(initialDivisionFilter);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories based on current division filter
  const availableCategories = useMemo(() => {
    let filtered = products;
    if (selectedDivision !== 'all') {
      filtered = products.filter(p => p.divisionId === selectedDivision);
    }
    const categoriesSet = new Set(filtered.map(p => p.category));
    return ['all', ...Array.from(categoriesSet)];
  }, [selectedDivision]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Division filter
      if (selectedDivision !== 'all' && product.divisionId !== selectedDivision) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.shortDescription.toLowerCase().includes(q);
        const matchesCat = product.category.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCat) {
          return false;
        }
      }
      return true;
    });
  }, [selectedDivision, selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeading
            badge="Product Catalogue"
            title="Materials & Technical Product Range"
            subtitle="Browse specifications and sizes. Inquire on WhatsApp for bulk project rates."
            centered={false}
          />

          <p className="text-xs text-slate-500 bg-slate-50 border border-slate-200 p-2.5 rounded max-w-sm">
            <strong>Informational Catalogue:</strong> Click "View Details" for full dimensions and standards. Direct WhatsApp inquiry enabled for each item.
          </p>
        </div>

        {/* Division Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          <button
            type="button"
            onClick={() => {
              setSelectedDivision('all');
              setSelectedCategory('all');
            }}
            className={`px-3.5 py-1.5 rounded-sm text-xs sm:text-sm font-bold transition-colors ${
              selectedDivision === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Products ({products.length})
          </button>

          {divisions.map((div) => {
            const isSelected = selectedDivision === div.id;
            const count = products.filter(p => p.divisionId === div.id).length;

            return (
              <button
                key={div.id}
                type="button"
                onClick={() => {
                  setSelectedDivision(div.id);
                  setSelectedCategory('all');
                }}
                className={`px-3.5 py-1.5 rounded-sm text-xs sm:text-sm font-bold transition-colors ${
                  isSelected
                    ? 'bg-brand-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {div.shortName} ({count})
              </button>
            );
          })}
        </div>

        {/* Search & Category Sub-Bar */}
        <div className="mt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-slate-50 p-3 rounded border border-slate-200">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by product name, category, or size..."
              className="w-full pl-9 pr-3 py-1.5 rounded bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-brand-600"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
            {availableCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-sm text-xs whitespace-nowrap font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-slate-800 text-white'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat === 'all' ? 'All Categories' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={onOpenProductDetails}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 text-center py-12 bg-slate-50 rounded border border-slate-200">
            <p className="text-sm font-bold text-slate-700">No matching products found</p>
            <p className="text-xs text-slate-500 mt-1">Try resetting your search or category filter.</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedDivision('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs"
            >
              Reset Filters
            </Button>
          </div>
        )}

      </div>
    </section>
  );
}
