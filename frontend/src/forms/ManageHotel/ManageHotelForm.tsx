import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import HotelTypeSection from "./HotelTypeSection";
import FacilitiesSection from "./FacilitiesSection";
import GuestsSection from "./GuestsSection";
import { Button } from "@/components/ui/button";

import { HotelType } from "../../../../backend/src/models/hotel.model";

export type HotelFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  pricePerNight: number;
  facilities: string[];
  imageFiles: FileList;
  imageUrls: string[];
  adultCount: number;
  childCount: number;
};

type Props = {
  hotel?: HotelType;
  onSave: (hotelFormData: HotelFormData) => void;
  isLoading: boolean;
};

const ManageHotelForm = ({ onSave, isLoading, hotel }: Props) => {
  const formMethods = useForm<HotelFormData>();
  const { handleSubmit, reset } = formMethods;

  useEffect(() => {
    reset(hotel);
  }, [hotel, reset]);

  const onSubmit = handleSubmit((formDataJson: HotelFormData) => {
    onSave(formDataJson);
  });

  return (
    <FormProvider {...formMethods}>
      <form
        className="flex flex-col gap-10 max-w-screen-md"
        onSubmit={onSubmit}
      >
        <DetailsSection />
        <HotelTypeSection />
        <FacilitiesSection />
        <GuestsSection />
        <span className="flex justify-end">
          <Button disabled={isLoading} type="submit">
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManageHotelForm;
