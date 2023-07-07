import React from "react";
import { Link } from "gatsby";
import IconsLibrary from "./bvIcons";

function getClassnameByType(variant, classNameAdditional) {
  console.log(classNameAdditional);
  const classMappings = {
    primary: `bg-[#40e640] rounded-[100px] px-[19px] py-[12px] text-black  leading-6 relative ${classNameAdditional}`,
    outline: `bg-transparent rounded-[100px] px-[19px] py-[10px] text-white border-white border-2 box-content  leading-6 relative ${classNameAdditional}`,
    ghost: `text-green-500 border-gray-100 rounded-[100px] px-[19px] py-[12px]  leading-6 text-white border-2 border-slate-300 relative ${classNameAdditional}`,
  };

  const className = classMappings[variant];

  // Return the class name if found, or an empty string otherwise
  return className || "";
}

const BvButton = ({
  variant,
  type,
  url,
  children,
  iconType,
  className,
  iconClassName,
}) => {
  console.log(className);
  switch (type) {
    case "link-internal": {
      return (
        <Link to={url} className={getClassnameByType(variant, className)}>
          {children}
          {iconType && (
            <IconsLibrary type={iconType} className={iconClassName} />
          )}
        </Link>
      );
    }
    case "link-external": {
      return (
        <a
          href={url}
          rel="noopener noreferrer"
          target="_blank"
          className={getClassnameByType(variant, className)}
        >
          {children}
          {iconType && (
            <IconsLibrary type={iconType} className={iconClassName} />
          )}
        </a>
      );
    }
    default:
      return (
        <button className={getClassnameByType(variant, className)}>
          {children}{" "}
          {iconType && (
            <IconsLibrary type={iconType} className={iconClassName} />
          )}
        </button>
      );
  }
};

export default BvButton;
