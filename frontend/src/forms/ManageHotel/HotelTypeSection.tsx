import { useFormContext } from "react-hook-form";
import { HOTEL_TYPES } from "@/config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";
import { ErrorToolTip } from "@/components/ErrorToolTip";

const HotelTypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  const typeWatch = watch("type");

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-black/80 relative">
        <span className="mr-2">Hotel Type</span>
        {errors.type && <ErrorToolTip errorMessage={errors.type.message} />}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {HOTEL_TYPES.map((type) => (
          <label
            key={type}
            className={
              typeWatch === type
                ? "cursor-pointer bg-primary-300 text-sm rounded-full px-4 py-2 font-semibold"
                : "cursor-pointer bg-gray-100 hover:bg-gray-200 text-sm rounded-full px-4 py-2 font-semibold"
            }
          >
            <input
              type="radio"
              value={type}
              {...register("type", {
                required: "This field is required",
              })}
              className="hidden"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default HotelTypeSection;
