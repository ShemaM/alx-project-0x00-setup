import React from 'react';
import Button from '@/components/Button';
// NOTE: Card and Pill are imported but commented out to focus on the Button Task.
// import Card from '@/components/Card'; 

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen p-10 space-y-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center">Advanced Button Component Showcase</h1>
      
      {/* --- Section: Sizes --- */}
      <section className="space-y-4 p-4 border rounded-lg bg-white">
        <h2 className="text-xl font-semibold mb-3">Sizes (Rounded Full)</h2>
        <div className="flex space-x-4 items-center">
          <Button title="Small" styles="py-1 px-2 text-sm rounded-full" />
          <Button title="Medium" styles="py-2 px-4 text-base rounded-full" />
          <Button title="Large" styles="py-3 px-6 text-lg rounded-full" />
        </div>
      </section>

      {/* --- Section: Shapes --- */}
      <section className="space-y-4 p-4 border rounded-lg bg-white">
        <h2 className="text-xl font-semibold mb-3">Shapes (Medium Size)</h2>
        <div className="flex space-x-4 items-center">
          <Button title="Small Radius" styles="py-2 px-4 text-base rounded-sm" />
          <Button title="Medium Radius" styles="py-2 px-4 text-base rounded-md" />
          <Button title="Full Radius" styles="py-2 px-4 text-base rounded-full" />
        </div>
      </section>

      {/* --- Section: Combined --- */}
      <section className="space-y-4 p-4 border rounded-lg bg-white">
        <h2 className="text-xl font-semibold mb-3">Combined Styles (Large, Rounded-sm)</h2>
        <div className="flex space-x-4 items-center">
          <Button title="Submit Order" styles="py-3 px-6 text-lg rounded-sm bg-red-600 hover:bg-red-700" />
        </div>
      </section>
      
      {/* You would typically render other components here as well:
        <Card />
      */}
    </main>
  );
};

export default Landing;