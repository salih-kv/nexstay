import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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
          <Label htmlFor="adults">Adults</Label>
          <Input type="number" min={1} />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="children">Children</Label>
          <Input type="number" min={0} />
        </div>
      </div>
    </div>
  );
};

export default GuestsSection;
