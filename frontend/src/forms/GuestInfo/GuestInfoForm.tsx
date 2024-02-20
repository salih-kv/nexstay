import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppContext } from "@/contexts/AppContext";
import { DatePickerWithRange } from "@/components/DatePickerWithRange";

type Props = {
  hotelId: string;
  pricePerNight: number;
};

const GuestInfoForm = ({ hotelId, pricePerNight }: Props) => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="flex flex-col p-4 bg-gray-100 gap-4 rounded-md">
      <h3 className="text-lg font-bold mb-4">₹{pricePerNight}</h3>
      <form>
        <div className="grid grid-cols-1 gap-4 items-center">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="adults" className="relative">
              <span className="mr-2">Adults</span>
            </Label>
            <Input id="adults" type="number" min={1} max={20} />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="children" className="relative">
              <span className="mr-2">Children</span>
            </Label>
            <Input id="children" type="number" min={0} max={20} />
          </div>
          <DatePickerWithRange />

          {isLoggedIn ? (
            <Button>Book Now</Button>
          ) : (
            <Button>Login to Book</Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default GuestInfoForm;
