const startYear = 1925;

const currYear = new Date().getFullYear();

const yearsOptions = Array.from({ length: currYear - startYear }, (_, i) => ({
  value: `${currYear - i}`,
  label: `${currYear - i}`,
}));

const monthOptions = [
  { label: "January", value: "1" },
  { label: "February", value: "2" },
  { label: "March", value: "3" },
  { label: "April", value: "4" },
  { label: "May", value: "5" },
  { label: "June", value: "6" },
  { label: "July", value: "7" },
  { label: "August", value: "8" },
  { label: "September", value: "9" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];

const monthsToDate: Record<string, number> = {
  "1": 31,
  "2": 28,
  "3": 31,
  "4": 30,
  "5": 31,
  "6": 30,
  "7": 31,
  "8": 31,
  "9": 30,
  "10": 31,
  "11": 30,
  "12": 31,
};

export { yearsOptions, monthOptions, monthsToDate };
