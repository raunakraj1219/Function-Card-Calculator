import React, { Dispatch, SetStateAction, useState } from "react";
import CardIcon from "../assets/cardIcon";

type CardProps = {
    fName: string;
    equation: string;
    nextFunction: string;
    handleEquationChange: (
        // e: ChangeEvent<HTMLInputElement>,
        inputString: string,
        fName: string,
        setEquations: Dispatch<SetStateAction<{ [x: string]: string }>>
    ) => void;
    setEquations: Dispatch<SetStateAction<{ [x: string]: string }>>;
};

const FunctionCard: React.FC<CardProps> = ({
    fName,
    equation,
    nextFunction,
    handleEquationChange,
    setEquations,
}) => {
    const [inputString, setInputString] = useState(equation);
    return (
        <section className="rounded-[15px] border border-[#DFDFDF] w-[235px] h-fit p-4 text-left">
            <header className="text-[#A5A5A5] flex items-center gap-2 pb-4">
                <CardIcon /> Function: {fName}
            </header>
            <div>
                <p className="pb-1">Equation</p>
                <input
                    type="text"
                    className="rounded-md border border-[#D3D3D3] font-medium p-2 w-full"
                    value={inputString}
                    onChange={(e) => setInputString(e.target.value)}
                    onBlur={() =>
                        handleEquationChange(inputString, fName, setEquations)
                    }
                    // value={equation}
                    // onChange={(e) =>
                    //     handleEquationChange(
                    //         e.target.value,
                    //         fName,
                    //         setEquations
                    //     )
                    // }
                />
                <p className="pb-1 pt-3">Next function</p>
                <select
                    disabled
                    className="rounded-md border border-[#D3D3D3] font-medium p-2 w-full bg-gray-100 text-[#A5A5A5]"
                    value={nextFunction}
                >
                    <option className="text-xs flex bg-[#F5F5F5]">
                        Function: {nextFunction}
                    </option>
                </select>
            </div>
            <footer className="flex justify-between mt-5 text-[12px]">
                <div className="button">input</div>
                <div className="button">output</div>
            </footer>
        </section>
    );
};

export default FunctionCard;
