import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import BvButton from "./Button";
import IconsLibrary from "./bvIcons";

const STEP = 1;
const MIN = 0;
const MAX = 80;

const ContactForm = ({ types, bgColor, typesTitle }) => {
  const [currentType, setCurrentType] = useState(types[0].typeName);

  const [values, setValues] = React.useState([20, 40]);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (event) => {
    console.log(
      "check",
      event.target.value,
      event.target.checked,
      selectedValues
    );
    const { value, checked } = event.target;

    if (checked) {
      setSelectedValues((prevSelectedValues) => [...prevSelectedValues, value]);
    } else {
      setSelectedValues((prevSelectedValues) =>
        prevSelectedValues.filter((item) => item !== value)
      );
    }
  };
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`rounded-3xl overflow-hidden flex col-span-8`}
    >
      <div className="w-full">
        <div className="bg-gray-testimonial w-full flex items-center gap-x-2 px-[50px] py-[30px] text-[30px] font-medium rounded-[25px]">
          <span className="mr-2">{typesTitle} </span>
          {types.map((type) => {
            return (
              <div
                onClick={() => setCurrentType(type.typeName)}
                key={type.typeLabel}
                className={`${
                  currentType === type.typeName
                    ? "bg-checked-input text-textChecked  border-[2px] border-borderInputItemChecked"
                    : "bg-gray-testimonial border-[2px] border-input"
                }  rounded-[24px] flex items-center py-[12px] px-[20px] font-normal text-[16px] gap-x-2 cursor-pointer`}
              >
                <input
                  type="radio"
                  name="type"
                  checked={type.typeName === currentType}
                />
                {type.typeLabel}
              </div>
            );
          })}
        </div>
        <div>
          {types.map((type) => {
            return (
              <div key={type.typeLabel} className="flex flex-col w-full">
                {currentType === type.typeName &&
                  type.inputsRows.map((inputRow) => {
                    return (
                      <div
                        key={inputRow.rowNumber}
                        className="bg-gray-testimonial w-full flex justify-between items-center gap-x-2 px-[50px] py-[30px] text-[30px] font-medium rounded-[25px] mt-[2px]"
                      >
                        {inputRow.inputs.map((input) => {
                          switch (input.type) {
                            case "text":
                              return (
                                <div className="w-full">
                                  <div className="flex gap-x-2 items-center">
                                    <h3 className="text-[32px] mr-2">
                                      {input.label}
                                    </h3>
                                    <input
                                      type={input.type}
                                      className="bg-gray-testimonial inline-block w-1/2 focus:outline-none"
                                      placeholder={input.placeholder}
                                    />
                                  </div>
                                </div>
                              );
                            case "textarea":
                              return (
                                <div className={`w-full ${input.height}`}>
                                  <h3 className="text-[32px] mb-0 leading-snug">
                                    {input.label}
                                  </h3>
                                  <textarea
                                    rows={input.rows}
                                    className="w-full bg-gray-testimonial focus:outline-none "
                                    placeholder={input.placeholder}
                                    maxLength={input.rows}
                                  />
                                </div>
                              );
                            case "options-check":
                              return (
                                <div className={`w-full ${input.height}`}>
                                  <h3 className="text-[32px] mb-[22px] leading-snug">
                                    {input.label}
                                  </h3>
                                  <div className="flex flex-wrap gap-[8px]">
                                    {input.options.map((option) => {
                                      const optionNorm = option
                                        .toLowerCase()
                                        .replace(/[^a-z]/g, "-");
                                      return (
                                        <div
                                          className={`${
                                            selectedValues.includes(optionNorm)
                                              ? "bg-checked-input text-textChecked  border-[2px] border-borderInputItemChecked"
                                              : "bg-gray-testimonial border-[2px] border-input"
                                          } flex gap-x-2 items-center cursor-pointer py-[12px] px-[20px] rounded-[24px] border-[2px] relative text-[16px] transition-all`}
                                          key={option}
                                          style={{
                                            borderColor:
                                              "var(--borderColorItem)",
                                          }}
                                        >
                                          <input
                                            type="checkbox"
                                            value={optionNorm}
                                            checked={selectedValues.includes(
                                              optionNorm
                                            )}
                                            className="text-center block absolute w-full h-full left-0 opacity-0 cursor-pointer"
                                            placeholder="option"
                                            onChange={handleCheckboxChange}
                                          ></input>
                                          {option}
                                          {selectedValues.includes(
                                            optionNorm
                                          ) && (
                                            <IconsLibrary
                                              type="cross-mark"
                                              className="w-[12px] h-[12px]"
                                              fill="var(--bg)"
                                            />
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            case "email":
                              return (
                                <div className="w-full">
                                  <div className="flex gap-x-2 items-center">
                                    <h3 className="text-[32px] mr-2">
                                      {input.label}
                                    </h3>
                                    <input
                                      type={input.type}
                                      className="bg-gray-testimonial inline-block focus:outline-none w-1/3"
                                      placeholder={input.placeholder}
                                    />
                                  </div>
                                </div>
                              );
                            case "submit":
                              return (
                                <BvButton
                                  url="/"
                                  type="link-internal"
                                  variant="primary"
                                  iconType={input.iconType}
                                  iconClassName="absolute -top-4 left-[50%]"
                                  className="text-[16px] w-[188px] text-center rounded-[12px]"
                                >
                                  {input.label}
                                </BvButton>
                              );
                            case "range":
                              return (
                                <div className="w-full">
                                  <h3 className="text-[32px] mb-[22px] leading-snug">
                                    {input.label}
                                  </h3>
                                  <Range
                                    values={values}
                                    step={STEP}
                                    min={MIN}
                                    max={MAX}
                                    onChange={(values) => setValues(values)}
                                    renderTrack={({ props, children }) => (
                                      <div
                                        onMouseDown={props.onMouseDown}
                                        onTouchStart={props.onTouchStart}
                                        style={{
                                          ...props.style,
                                          height: "36px",
                                          display: "flex",
                                          width: "100%",
                                          marginBottom: "32px",
                                        }}
                                      >
                                        <div
                                          ref={props.ref}
                                          style={{
                                            height: "4px",
                                            width: "100%",
                                            borderRadius: "1000px",
                                            background: getTrackBackground({
                                              values,
                                              colors: [
                                                "#ccc",
                                                "#9100ff",
                                                "#ccc",
                                              ],
                                              min: MIN,
                                              max: MAX,
                                            }),
                                            alignSelf: "center",
                                          }}
                                        >
                                          {children}
                                        </div>
                                      </div>
                                    )}
                                    renderThumb={({
                                      index,
                                      props,
                                      isDragged,
                                    }) => (
                                      <div
                                        {...props}
                                        style={{
                                          ...props.style,
                                          height: "42px",
                                          width: "42px",
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                        }}
                                      >
                                        <div
                                          style={{
                                            position: "absolute",
                                            bottom: "-28px",
                                            color: "black",
                                            fontWeight: "600",
                                            fontSize: "20px",
                                            fontFamily: "Forma DJR",
                                            padding: "8px",
                                          }}
                                        >
                                          {values[index]}k
                                        </div>
                                        {index === 0 ? (
                                          <IconsLibrary
                                            type="triangle-range"
                                            style={{
                                              position: "absolute",
                                              top: "-6px",
                                              fill: isDragged
                                                ? "#de23fc"
                                                : "#CCC",
                                            }}
                                          />
                                        ) : (
                                          <IconsLibrary
                                            type="triangle-range"
                                            style={{
                                              position: "absolute",
                                              width: "16px",
                                              height: "12px",
                                              top: "-4px",
                                              fill: isDragged
                                                ? "#9100ff"
                                                : "#CCC",
                                            }}
                                          />
                                        )}
                                      </div>
                                    )}
                                  />
                                </div>
                              );
                            default:
                              return <></>;
                          }
                        })}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
