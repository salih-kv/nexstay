import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ErrorToolTip } from "@/components/ErrorToolTip";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div className="flex flex-col gap-4">
      <header className="mt-4 mb-8">
        <h1 className="text-3xl font-bold text-black/80">Join Our Network</h1>
        <p className="text-lg ">Add Your Hotel Listing</p>
      </header>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name" className="relative">
          <span className="pr-2">Name</span>
          {errors.name && <ErrorToolTip errorMessage={errors.name.message} />}
        </Label>
        <Input
          id="name"
          type="text"
          {...register("name", { required: "This field is required" })}
        />
      </div>

      <div className="flex gap-4">
        <div className="grid w-full items-center gap-1.5 ">
          <Label htmlFor="city" className="relative">
            <span className="pr-2">City</span>
            {errors.city && <ErrorToolTip errorMessage={errors.city.message} />}
          </Label>
          <Input
            id="city"
            type="text"
            {...register("city", { required: "This field is required" })}
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="country" className="relative">
            <span className="pr-2">Country</span>
            {errors.country && (
              <ErrorToolTip errorMessage={errors.country.message} />
            )}
          </Label>
          <Input
            id="country"
            type="text"
            {...register("country", { required: "This field is required" })}
          />
        </div>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="description" className="relative">
          <span className="pr-2">Description</span>
          {errors.description && (
            <ErrorToolTip errorMessage={errors.description.message} />
          )}
        </Label>
        <Textarea
          id="description"
          rows={10}
          placeholder="Write a description about the hotel"
          className="resize-none"
          {...register("description", { required: "This field is required" })}
        />
      </div>

      <div className="grid w-full items-center gap-1.5 max-w-[50%]">
        <Label htmlFor="price" className="relative">
          <span className="pr-2">Price Per Night</span>
          {errors.pricePerNight && (
            <ErrorToolTip errorMessage={errors.pricePerNight.message} />
          )}
        </Label>
        <Input
          id="price"
          type="number"
          min={1}
          {...register("pricePerNight", { required: "This field is required" })}
        />
      </div>
    </div>
  );
};

export default DetailsSection;
