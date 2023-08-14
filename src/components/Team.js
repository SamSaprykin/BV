import React from "react";

const Team = ({ title, titleHighlight, members }) => {
  return (
    <div className="w-full col-span-12 bg-black rounded-3xl p-[50px]">
      <h3 className="text-white w-full max-w-[1000px] text-[42px] leading-none mb-[53px]">
        {title} <span className="text-[#a5a5a5]">{titleHighlight}</span>
      </h3>
      <div className="grid grid-cols-4 gap-4">
        {members.length &&
          members.map((member) => {
            return (
              <div
                className="h-[400px] flex flex-col justify-between items-center bg-[#313131] rounded-[25px] p-[30px]"
                key={member.name}
              >
                <div className="w-full flex justify-between">
                  <span className="text-white text-[16px] leading-normal">
                    {member.name}
                  </span>
                  <span className="text-[#a5a5a5] text-[16px] leading-normal">
                    {member.country}
                  </span>
                </div>
                <img
                  src={member.icon}
                  alt={member.name + member.position}
                  className="w-[200px] h-[200px]"
                />
                <div className="w-full flex justify-between">
                  <span className="text-[#a5a5a5] text-[16px] leading-normal">
                    {member.position}
                  </span>
                  <span className="text-[#a5a5a5] text-[16px] leading-normal">
                    {member.yearJoined}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Team;
