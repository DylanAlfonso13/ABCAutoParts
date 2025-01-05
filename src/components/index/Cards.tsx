import Card from './Card';

export default function Cards() {
  return (
    <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Find the Perfect Part"
          description="Browse our extensive inventory to find the exact part you need for your vehicle."
          buttonText="Browse Inventory"
          buttonLink="https://abcautoparts.hollanderstores.com/"
          target="_blank"
        />
        <Card
          title="Sell Your Car"
          description="Get the best value for your old car. We offer competitive prices and hassle-free service."
          buttonText="Get a Quote"
          buttonLink="#"
          target="_self"
        />
        <Card
          title="Contact Our Experts"
          description="Have questions? Our team of experts is here to help you with all your auto part needs."
          buttonText="Contact Us"
          buttonLink="#"
          target="_self"
        />
      </div>
    </div>
  );
}