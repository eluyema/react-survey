import { zodiacSigns } from "@/common/constants/zodiacSigns.constant";

const getZodiacSign = (date: Date) => {
  const zodiac = zodiacSigns.find((sign) => {
    const start = new Date(`${date.getFullYear()}-${sign.start}`);
    const end = new Date(`${date.getFullYear()}-${sign.end}`);
    return date >= start && date <= end;
  });

  return zodiac ? zodiac.sign : "Unknown";
};

export { getZodiacSign };
