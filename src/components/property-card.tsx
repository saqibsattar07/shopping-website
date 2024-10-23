import Link from "next/link";
import { propertiesList } from "./features";
import Image from "next/image";
import { FaBath, FaBed, FaRegSquare, FaStar } from "react-icons/fa6";

type propertyCardProps = (typeof propertiesList)[0];

const PropertyCard = ({
  id,
  name,
  price,
  rating,
  sqft,
  beds,
  baths,
  image,
}: propertyCardProps) => {
  return (
    <Link href="/">
      <div className="border rounded-md overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={400}
            height={420}
            className="w-full transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-6 space-y-6">
          <p className="text-lg font-semibold">{name}</p>
          <div className="grid grid-cols-3 items-center divide-x border-y border-border/50">
            <p className="py-2 flex items-center gap-2 justify-center">
              <FaRegSquare className="w-4 h-4" />
              {sqft} Sqft
            </p>

            <p className="py-2 flex items-center gap-2 justify-center">
              <FaBed className="w-4 h-4" />
              {beds} Beds
            </p>

            <p className="py-2 flex items-center gap-2 justify-center">
              <FaBath className="w-4 h-4" />
              {baths} Baths
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-muted-foreground">Price</p>
              <p className="font-semibold">{price}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Rating</p>
              <div className="flex gap-2 items-center">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar
                      key={index}
                      color={index < rating ? "orange" : "#d1d5db"} // orange for filled, gray for unfilled
                      size={18}
                      className="transition-colors duration-300 ease-in-out" // add smooth color transition
                    />
                  ))}
                <p className="font-semibold">{rating}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
