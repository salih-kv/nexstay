import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import * as apiClient from "../../api-client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Bed, Building, IndianRupee, Map } from "lucide-react";

import { HotelType } from "../../../../backend/src/models/hotel.model";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels
  );

  return (
    <div>
      <header className="flex items-center justify-end mb-6">
        <Link to="/add-hotel">
          <Button>Add hotel</Button>
        </Link>
      </header>

      <div className="space-y-5">
        <div className="grid grid-cols-1 gap-8">
          {hotelData ? (
            hotelData?.map((hotel: HotelType) => (
              <div
                key={hotel._id}
                data-testid="hotel-card"
                className="flex flex-col justify-between border border-slate-300 rounded-lg p-8 gap-5"
              >
                <h2 className="text-2xl font-bold">{hotel.name}</h2>
                <div className="whitespace-pre-line">{hotel.description}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                  <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                    <Map size={16} className="mr-1" />
                    {hotel.city}, {hotel.country}
                  </div>
                  <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                    <Building size={16} className="mr-1" />
                    {hotel.type}
                  </div>
                  <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                    <IndianRupee size={16} className="mr-1" />
                    {hotel.pricePerNight} per night
                  </div>
                  <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                    <Bed size={16} className="mr-1" />
                    {hotel.adultCount} adults, {hotel.childCount} children
                  </div>
                </div>
                <span className="flex space-x-3 justify-end">
                  <Link
                    to={`/hotel/${hotel._id}`}
                    className={buttonVariants({ variant: "secondary" })}
                  >
                    View Details
                  </Link>
                  <Link
                    to={`/hotel/${hotel._id}/edit`}
                    className={buttonVariants()}
                  >
                    Edit Details
                  </Link>
                </span>
              </div>
            ))
          ) : (
            <span>No Hotels found</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyHotels;
