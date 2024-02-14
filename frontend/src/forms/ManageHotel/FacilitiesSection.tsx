import { useFormContext } from "react-hook-form";
import { HOTEL_FACILITIES } from "@/config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-black/80">Facilities</h2>

      <div className="grid grid-cols-5 gap-3">
        {HOTEL_FACILITIES.map((facility) => (
          <div key={facility} className="flex items-center gap-1 text-black/90">
            <Checkbox className="border-black" id={facility} value={facility} />
            <Label htmlFor={facility}>{facility}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesSection;
