import { useFormContext } from "react-hook-form";
import { HOTEL_TYPES } from "@/config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const HotelTypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  const typeWatch = watch("type");
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-black/80">Hotel Type</h2>
      <div className="grid grid-cols-5 gap-2">
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
      {errors.type && (
        <span className="text-red-500 text-sm font-bold">
          {errors.type.message}
        </span>
      )}
    </div>
  );
};

export default HotelTypeSection;
