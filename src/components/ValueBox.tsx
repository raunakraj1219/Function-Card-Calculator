import React, { ChangeEvent } from "react";
import { VALUE_TYPE_CONTENT, VALUE_TYPES } from "../constant";

type ValueProps = {
    valueType: string;
    value: number | undefined;
    handleInitialValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ValueBox: React.FC<ValueProps> = ({
    valueType,
    value,
    handleInitialValueChange,
}) => {
    console.log({ valueType }, VALUE_TYPE_CONTENT[valueType].HEADING);
    return (
        <aside>
            <div
                className={`bg-[${VALUE_TYPE_CONTENT[valueType].COLOR}] font-semibold text-white px-0.5 py-1 rounded-[14px] text-xs mb-2`}
                style={{
                    backgroundColor: VALUE_TYPE_CONTENT[valueType].COLOR,
                }}
            >
                {VALUE_TYPE_CONTENT[valueType].HEADING}
            </div>
            <div
                className={`border-2 border-[${VALUE_TYPE_CONTENT[valueType].COLOR}] rounded-md`}
            >
                <input
                    value={value}
                    onChange={handleInitialValueChange}
                    disabled={valueType === VALUE_TYPES.OUTPUT}
                    className="px-2 rounded-md"
                />
            </div>
        </aside>
    );
};

export default ValueBox;
