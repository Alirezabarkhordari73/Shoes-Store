import React, { useEffect } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

type Props = {
  Ratevalue: 0 | 1 | 2 | 3 | 4 | 5;
};

const StarRate = ({ Ratevalue }: Props) => {
  const rates = [
    { isStarFilled: false, Id: 1 },
    { isStarFilled: false, Id: 2 },
    { isStarFilled: false, Id: 3 },
    { isStarFilled: false, Id: 4 },
    { isStarFilled: false, Id: 5 },
  ];

  if (Ratevalue <= 5 && Ratevalue >= 0) {
    for (let index = 0; index < Ratevalue; index++) {
      rates[index].isStarFilled = true;
    }
  } else rates;

  console.log(rates);
  return (
    <div className="flex justify-center items-center">
      {rates.map((item) =>
        item.isStarFilled ? (
          <AiFillStar key={item.Id} className="text-[1.2rem] text-[#ffcd27]" />
        ) : (
          <AiOutlineStar
            key={item.Id}
            className="text-[1.2rem] text-[#adadad]"
          />
        )
      )}
    </div>
  );
};

export default StarRate;
