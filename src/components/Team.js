import React from "react";

const Team = ({ title, titleHighlight, members }) => {
  return (
    <div className="w-full col-span-12 bg-black rounded-3xl p-[30px] md:p-[50px]">
      <h3 className="text-white w-full max-w-[1000px] text-[28px] md:text-[42px] leading-[28px] md:leading-none mb-[53px]">
        {title} <span className="text-[#a5a5a5]">{titleHighlight}</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {members.length &&
          members.map((member) => {
            return (
              <div
                className="h-[340px] md:h-[400px] flex flex-col justify-between items-center bg-[#313131] rounded-[25px] p-[20px] md:p-[30px]"
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
