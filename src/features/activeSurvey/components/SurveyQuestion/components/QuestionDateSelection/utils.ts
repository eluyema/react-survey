import { monthsToDate } from "./constants";

const getDaysOption = (month: string) => {
  const length = monthsToDate[month];

  return Array.from({ length }, (_, i) => ({
    value: `${i + 1}`,
    label: `${i + 1}`,
  }));
};

export { getDaysOption };
