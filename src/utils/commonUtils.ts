import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const handleEquationChange = (
    // e: ChangeEvent<HTMLInputElement>,
    inputString: string,
    fName: string,
    setEquations: Dispatch<SetStateAction<{ [x: string]: string }>>
) => {
    const val = inputString;
    setEquations((prevState) => ({ ...prevState, [fName]: val }));
};

const returnModifiedFunction = (inputFunction: string) => {
    let userInput = inputFunction;
    userInput = userInput.replace(/\^/g, "**");
    userInput = userInput.replace(/(\d)(x)/g, "$1 * $2");
    return userInput;
};

export const computeFunctionValue = (
    inputFunction: string,
    varValue: number | undefined
) => {
    const modifiedFunction = returnModifiedFunction(inputFunction);
    const fun = new Function("x", `return ${modifiedFunction};`);
    return fun(varValue);
};
