import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import { FUNCTION_NAMES, VALUE_TYPES } from "./constant";
import FunctionCard from "./components/FunctionCard";
import {
    computeFunctionValue,
    handleEquationChange,
} from "./utils/commonUtils";
import ValueBox from "./components/ValueBox";

function App() {
    const [initialValue, setInitialValue] = useState<number | undefined>(2);
    const [equations, setEquations] = useState({
        [FUNCTION_NAMES.FUNCTION_1]: "x^2",
        [FUNCTION_NAMES.FUNCTION_2]: "2x+4",
        [FUNCTION_NAMES.FUNCTION_3]: "x^2+20",
        [FUNCTION_NAMES.FUNCTION_4]: "x-2",
        [FUNCTION_NAMES.FUNCTION_5]: "x/2",
    });

    const [outputValues, setOutputValue] = useState({
        [FUNCTION_NAMES.FUNCTION_1]: 0,
        [FUNCTION_NAMES.FUNCTION_2]: 0,
        [FUNCTION_NAMES.FUNCTION_3]: 0,
        [FUNCTION_NAMES.FUNCTION_4]: 0,
        [FUNCTION_NAMES.FUNCTION_5]: 0,
    });

    const handleInitialValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log({ value });
        setInitialValue(Number(value));
    };

    // To compute Function 1
    useEffect(() => {
        setOutputValue((prevState) => ({
            ...prevState,
            [FUNCTION_NAMES.FUNCTION_1]: computeFunctionValue(
                equations[FUNCTION_NAMES.FUNCTION_1],
                initialValue
            ),
        }));
    }, [equations[FUNCTION_NAMES.FUNCTION_1], initialValue]);

    // To compute Function 2
    useEffect(() => {
        setOutputValue((prevState) => ({
            ...prevState,
            [FUNCTION_NAMES.FUNCTION_2]: computeFunctionValue(
                equations[FUNCTION_NAMES.FUNCTION_2],
                outputValues[FUNCTION_NAMES.FUNCTION_1]
            ),
        }));
    }, [
        equations[FUNCTION_NAMES.FUNCTION_2],
        outputValues[FUNCTION_NAMES.FUNCTION_1],
    ]);

    // To compute Function 4
    useEffect(() => {
        setOutputValue((prevState) => ({
            ...prevState,
            [FUNCTION_NAMES.FUNCTION_4]: computeFunctionValue(
                equations[FUNCTION_NAMES.FUNCTION_4],
                outputValues[FUNCTION_NAMES.FUNCTION_2]
            ),
        }));
    }, [
        equations[FUNCTION_NAMES.FUNCTION_4],
        outputValues[FUNCTION_NAMES.FUNCTION_2],
    ]);

    // To compute Function 5
    useEffect(() => {
        setOutputValue((prevState) => ({
            ...prevState,
            [FUNCTION_NAMES.FUNCTION_5]: computeFunctionValue(
                equations[FUNCTION_NAMES.FUNCTION_5],
                outputValues[FUNCTION_NAMES.FUNCTION_4]
            ),
        }));
    }, [
        equations[FUNCTION_NAMES.FUNCTION_5],
        outputValues[FUNCTION_NAMES.FUNCTION_4],
    ]);

    // To compute Function 3
    useEffect(() => {
        setOutputValue((prevState) => ({
            ...prevState,
            [FUNCTION_NAMES.FUNCTION_3]: computeFunctionValue(
                equations[FUNCTION_NAMES.FUNCTION_3],
                outputValues[FUNCTION_NAMES.FUNCTION_5]
            ),
        }));
    }, [
        equations[FUNCTION_NAMES.FUNCTION_3],
        outputValues[FUNCTION_NAMES.FUNCTION_5],
    ]);

    return (
        <main className="font-inter flex flex-col gap-11">
            <div className="flex justify-around items-end">
                <ValueBox
                    valueType={VALUE_TYPES.INPUT}
                    value={initialValue}
                    handleInitialValueChange={handleInitialValueChange}
                />
                <FunctionCard
                    fName={FUNCTION_NAMES.FUNCTION_1}
                    equation={equations[FUNCTION_NAMES.FUNCTION_1]}
                    nextFunction={FUNCTION_NAMES.FUNCTION_2}
                    handleEquationChange={handleEquationChange}
                    setEquations={setEquations}
                />
                <FunctionCard
                    fName={FUNCTION_NAMES.FUNCTION_2}
                    equation={equations[FUNCTION_NAMES.FUNCTION_2]}
                    nextFunction={FUNCTION_NAMES.FUNCTION_4}
                    handleEquationChange={handleEquationChange}
                    setEquations={setEquations}
                />
                <FunctionCard
                    fName={FUNCTION_NAMES.FUNCTION_3}
                    equation={equations[FUNCTION_NAMES.FUNCTION_3]}
                    nextFunction={FUNCTION_NAMES.FUNCTION_2}
                    handleEquationChange={handleEquationChange}
                    setEquations={setEquations}
                />
                <ValueBox
                    valueType={VALUE_TYPES.OUTPUT}
                    value={outputValues[FUNCTION_NAMES.FUNCTION_3]}
                />
            </div>
            <div className="flex justify-around px-20">
                <FunctionCard
                    fName={FUNCTION_NAMES.FUNCTION_4}
                    equation={equations[FUNCTION_NAMES.FUNCTION_4]}
                    nextFunction={FUNCTION_NAMES.FUNCTION_5}
                    handleEquationChange={handleEquationChange}
                    setEquations={setEquations}
                />
                <FunctionCard
                    fName={FUNCTION_NAMES.FUNCTION_5}
                    equation={equations[FUNCTION_NAMES.FUNCTION_5]}
                    nextFunction={FUNCTION_NAMES.FUNCTION_3}
                    handleEquationChange={handleEquationChange}
                    setEquations={setEquations}
                />
            </div>
        </main>
    );
}

export default App;
