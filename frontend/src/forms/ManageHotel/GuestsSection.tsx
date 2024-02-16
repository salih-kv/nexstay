import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ErrorToolTip } from "@/components/ErrorToolTip";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-black/80">Guests</h2>
      <div className="grid grid-cols-2 p-6 gap-5 bg-gray-100 rounded-md">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="adults" className="relative">
            <span className="mr-2">Adults</span>
            {errors.adultCount && (
              <ErrorToolTip errorMessage={errors.adultCount.message} />
            )}
          </Label>
          <Input
            id="adults"
            type="number"
            min={1}
            {...register("adultCount", {
              required: "This field is required",
            })}
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="children" className="relative">
            <span className="mr-2">Children</span>
            {errors.childCount && (
              <ErrorToolTip errorMessage={errors.childCount.message} />
            )}
          </Label>
          <Input
            id="children"
            type="number"
            min={0}
            {...register("childCount", {
              required: "This field is required",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default GuestsSection;
