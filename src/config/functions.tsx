function addCommaToPriceUnsigned(price: string | number | undefined) {
  if (price === 0) {
    return price;
  }
  if (!price) {
    return "";
  }
  const splittedPrice = price.toString().split(".");
  if (splittedPrice[0].toString().length > 3) {
    const formattedPrice = splittedPrice[0]
      .toString()
      .split("")
      .reverse()
      .join("")
      .replace(/.{3}/g, "$&,")
      .split("")
      .reverse()
      .join("");
    if (formattedPrice.toString().charAt(0) === ",") {
      return `${formattedPrice.substr(1)}${
        splittedPrice.length > 1 ? `.${splittedPrice[1]}` : ""
      }`;
    }
    return `${formattedPrice}${
      splittedPrice.length > 1 ? `.${splittedPrice[1]}` : ""
    }`;
  }
  return price;
}

export function addCommaToPrice(price: string | number | undefined) {
  if (!price) {
    return "";
  }
  if (price.toString().length < 3) {
    return price;
  }
  if (price.toString()[0] === "-") {
    return `${localStorage.lang === "fa" ? "" : "-"}${addCommaToPriceUnsigned(
      price.toString().substr(1)
    )}${localStorage.lang === "fa" ? "-" : ""}`;
  }
  return addCommaToPriceUnsigned(price);
}

export const convertPersian2EnglishNumbers = (myNumber: string) =>
  myNumber.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
