import PropertyCard from "./property-card";

export const propertiesList = [
  {
    id: "pro__1",
    name: "815 Oak St, Anytown, USA",
    price: 1400871,
    rating: 4.7,
    sqft: 3097,
    beds: 2,
    baths: 3,
    image: "/image-1.png",
  },
  {
    id: "pro__2",
    name: "482 Main St, Anytown, USA",
    price: 749689,
    rating: 3.1,
    sqft: 3845,
    beds: 1,
    baths: 1,
    image: "/image-2.jpg",
  },
  {
    id: "pro__3",
    name: "204 Pine St, Anytown, USA",
    price: 1734507,
    rating: 4.1,
    sqft: 2096,
    beds: 5,
    baths: 1,
    image: "/image-3.jpg",
  },
  {
    id: "pro__4",
    name: "669 Main St, Anytown, USA",
    price: 1487452,
    rating: 3.8,
    sqft: 3183,
    beds: 4,
    baths: 2,
    image: "/image-4.jpg",
  },
  {
    id: "pro__5",
    name: "601 Pine St, Anytown, USA",
    price: 1769722,
    rating: 3.4,
    sqft: 1806,
    beds: 3,
    baths: 2,
    image: "/image-5.jpg",
  },
  {
    id: "pro__6",
    name: "807 Oak St, Anytown, USA",
    price: 1509589,
    rating: 3.2,
    sqft: 3920,
    beds: 3,
    baths: 4,
    image: "/image-6.jpg",
  },
  {
    id: "pro__7",
    name: "493 Main St, Anytown, USA",
    price: 1746145,
    rating: 4.3,
    sqft: 2350,
    beds: 3,
    baths: 4,
    image: "/image-7.jpg",
  },
  {
    id: "pro__8",
    name: "266 Main St, Anytown, USA",
    price: 1060025,
    rating: 4.3,
    sqft: 2370,
    beds: 3,
    baths: 1,
    image: "/image-8.jpg",
  },
  {
    id: "pro__9",
    name: "795 Maple St, Anytown, USA",
    price: 1092902,
    rating: 3.7,
    sqft: 3700,
    beds: 4,
    baths: 2,
    image: "/image-9.jpg",
  },
];

const Features = () => {
  return (
    <div className="container mx-auto pt-10 pb-20">
      <h3 className="text-4xl text-center mb-2">Featurred Properties</h3>
      <p className="text-center text-muted-foreground">
        Explore our exquisite featured properties showcasing unparalleled charm,
        luxurious amenities, and prime locations
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 justify-center">
        {propertiesList.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default Features;
