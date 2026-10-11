import React from 'react';
import SectionHeading from '../common/SectionHeading';
import BrochureCard from '../common/BrochureCard';
import { divisions } from '../../data/solutions';

export default function BrochuresSection({ onViewBrochure }) {
  return (
    <section id="brochures" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Brochures & Catalogues"
          title="Product Catalogues & Technical Sizing Guides"
          subtitle="Download complete dimensional schedules and specification sheets for our plumbing and birdnet product lines."
          centered={false}
        />

        {/* 2 Brochure Cards */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {divisions.map((division) => (
            <BrochureCard
              key={division.id}
              divisionName={division.name}
              title={division.brochure.title}
              edition={division.brochure.edition}
              fileSize={division.brochure.fileSize}
              format={division.brochure.format}
              pages={division.brochure.pages}
              coverImage={division.brochure.coverImage}
              description={`Official catalogue for ${division.name}. Contains full product lists, raw material specifications, dimensional schedules, and packaging details.`}
              onViewBrochure={onViewBrochure}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
