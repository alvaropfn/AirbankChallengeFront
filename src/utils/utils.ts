export const parseDate = (date: Date) => {
  if (!date) return false;
  const stringDate = date as unknown as string;
  const [year, month, day] = stringDate.split(" ")[0].split("-");
  return `${day}/${month}/${year}`;
};

export const currencySymbol = (currency: string): string => {
  console.log(currency);
  switch (currency) {
    case "GBP":
      return "£";
    case "EUR":
      return "€";
    case "BRL":
      return "R$";
    case "USD":
      return "$";
    default:
      return "$";
  }
};
