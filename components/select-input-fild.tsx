import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@radix-ui/react-scroll-area";

interface SelectInputFieldProps {
  field: any;
  placeholder: string;
  mapData: { label: string; value: string }[];
}

const SelectInputField: React.FC<SelectInputFieldProps> = ({
  field,
  placeholder,
  mapData,
}) => {
  return (
    <Select
      onValueChange={field.onChange}
      value={field.value}
      defaultValue={field.value}
    >
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <ScrollArea className="max-h-40">
            {mapData.map((item, i) => (
              <SelectItem key={i} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectInputField;
