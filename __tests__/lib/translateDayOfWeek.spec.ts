import { translateDayOfWeek } from "@/lib/translateDayOfWeek";

describe('translateDayOfWeek', () => {
  it('should return the correct translated day of the week', () => {
    const date = new Date('2022-01-01'); // Saturday
    const translatedDay = translateDayOfWeek(date);
    expect(translatedDay).toBe('土');
  });

  it('should return the correct translated day of the week for different dates', () => {
    const date1 = new Date('2022-01-02'); // Sunday
    const date2 = new Date('2022-01-03'); // Monday
    const date3 = new Date('2022-01-04'); // Tuesday
    const translatedDay1 = translateDayOfWeek(date1);
    const translatedDay2 = translateDayOfWeek(date2);
    const translatedDay3 = translateDayOfWeek(date3);
    expect(translatedDay1).toBe('日');
    expect(translatedDay2).toBe('月');
    expect(translatedDay3).toBe('火');
  });
});