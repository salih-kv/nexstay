import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
        <Label htmlFor="name">Name</Label>
        <Input type="text" />
      </div>

      <div className="flex gap-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="city">City</Label>
          <Input type="text" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="country">Country</Label>
          <Input type="text" />
        </div>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="description">Description</Label>
        <Textarea
          rows={10}
          placeholder="Write a description about the hotel"
          className="resize-none"
        />
      </div>

      <div className="grid w-full items-center gap-1.5 max-w-[50%]">
        <Label htmlFor="price">Price Per Night</Label>
        <Input type="number" min={1} />
      </div>

      <Select>
        <Label htmlFor="rating">Star Rating</Label>
        <SelectTrigger className="w-full max-w-[50%]">
          <SelectValue placeholder="Select as Rating" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {[1, 2, 3, 4, 5].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DetailsSection;
