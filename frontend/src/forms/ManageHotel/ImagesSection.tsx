import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import { Input } from "@/components/ui/input";

const ImagesSection = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-black/80">Images</h2>
      <div className="border rounded p-4 flex flex-col gap-4">
        <div className="grid w-full items-center gap-1.5">
          <Input id="picture" type="file" multiple accept="image/*" />
        </div>
      </div>
    </div>
  );
};

export default ImagesSection;
