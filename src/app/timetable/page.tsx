import { getDates } from '@/lib/getDates';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function TimeTable() {
  const dates = getDates();

  return (
    <>
      <main className="bg-white">
        <div className="h-200 mt-2 p-4">
          <Select defaultValue={dates[0].label}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {dates.map((date) => (
                <SelectItem key={date.label} value={date.label}>
                  {date.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </main>
    </>
  );
}
