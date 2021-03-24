import { addCommaToPrice } from "./functions";

test("renders learn react link", () => {
  const emptyresult = addCommaToPrice("");
  const zeroresult = addCommaToPrice("0");
  const zeroStringResult = addCommaToPrice("0");

  // this case is to make sure it doesn't add comma at the back of the number . example: "321" => wrong result: ",321"      correct result: "321"
  const threeDigitNumber = addCommaToPrice("321");

  const normalStringNumber = addCommaToPrice("4651320");
  const normalNumber = addCommaToPrice("4651320");

  // negative numbers
  const smallStringNegativeNumber = addCommaToPrice("-12");
  const smallNegativeNumber = addCommaToPrice(-12);
  const bigStringNegativeNumber = addCommaToPrice("-46531223");
  const bigNegativeNumber = addCommaToPrice("-46531223");

  // this case is to make sure it doesn't add comma at the back of the number . example: "-321" => wrong result: "-,321"      correct result: "-321"
  const threeDigitsNegativeNumber = addCommaToPrice("-623");

  expect(emptyresult).toBe("");
  expect(zeroresult).toBe("0");
  expect(zeroStringResult).toBe("0");
  expect(threeDigitNumber).toBe("321");
  expect(normalStringNumber).toBe("4,651,320");
  expect(normalNumber).toBe("4,651,320");
  expect(smallStringNegativeNumber).toBe("-12");
  expect(smallNegativeNumber).toBe("-12");
  expect(bigStringNegativeNumber).toBe("-46,531,223");
  expect(bigNegativeNumber).toBe("-46,531,223");
  expect(threeDigitsNegativeNumber).toBe("-623");
});
