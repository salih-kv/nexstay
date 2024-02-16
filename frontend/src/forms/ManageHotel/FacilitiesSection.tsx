import { useFormContext } from "react-hook-form";
import { HOTEL_FACILITIES } from "@/config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";
import { Label } from "@/components/ui/label";
import { ErrorToolTip } from "@/components/ErrorToolTip";
import { Input } from "@/components/ui/input";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-black/80 relative">
        <span className="mr-2">Facilities</span>
        {errors.facilities && (
          <ErrorToolTip errorMessage={errors.facilities.message} />
        )}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-4">
        {HOTEL_FACILITIES.map((facility) => (
          <div key={facility} className=" text-black/90">
            <Input
              type="checkbox"
              id={facility}
              value={facility}
              {...register("facilities", {
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return "At least one facility is required";
                  }
                },
              })}
            />
            <Label htmlFor={facility}>{facility}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesSection;
