import React, { useState } from "react";
import "./App.css";
import { TextField } from "@material-ui/core";
import {
  addCommaToPrice,
  convertPersian2EnglishNumbers,
} from "./config/functions";

function App() {
  const [price, setPrice] = useState<string | undefined>(undefined);

  const regexForValidNumber = /^[-+]?\d*(\.\d*)?$/;

  const onPriceValueChanged = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newValue = event.currentTarget.value;

    newValue = newValue.replace(/,/g, "");

    //after parseFloat and toString it does not recohnize the "." therefore we put it inside the if condition
    if (newValue[newValue.length - 1] === ".") {
      newValue = newValue ? parseFloat(newValue).toString() : newValue;
      newValue += ".";
    } else {
      newValue = newValue ? parseFloat(newValue).toString() : newValue;
    }

    if (regexForValidNumber.test(newValue)) {
      setPrice(newValue);
    }
  };

  return (
    <div className="App">
      <TextField
        variant="outlined"
        placeholder="Enter price"
        label="Price"
        value={addCommaToPrice(price)}
        onChange={onPriceValueChanged}
      />
    </div>
  );
}
export default App;
