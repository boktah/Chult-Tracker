import {
  Box,
  Flex,
  IconButton,
} from "@chakra-ui/react";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";

import { useState, useEffect } from 'react';

import months from '../data/months.json'; // TODO: get from DB

function Calendar() {

  const currentMonth = 4; // TODO: get from DB
  const [monthId, setMonthId] = useState(currentMonth);
  const [month, setMonth] = useState(months[currentMonth]);

  const changeMonth = (direction) => {
    var newMonthId = monthId + direction;
    if (newMonthId < 0) { newMonthId = 17; }
    else if (newMonthId > 17) { newMonthId = 0; }
    setMonthId(newMonthId);
  }

  useEffect(() => {
    setMonth(months[monthId]);
    console.log(monthId);
  }, [monthId]);

  /* 
  Header
    Left IconButton
      Month Name
      Month Nickname
      Year
    Right IconButton
  Calendar
    grid
  */

  return (
    <Box w="100%" my={"10%"}>
      <Flex w={"100%"} direction={"row"} justifyContent={"space-around"} alignItems={"center"}>
        <IconButton
          aria-label="Last month"
          icon={<ArrowLeftIcon />}
          onClick={() => changeMonth(-1)}
        />
        <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>
          <Box
            fontSize={"2em"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            {month.name}
          </Box>
          <Box
            fontSize={"1em"}
            fontWeight={"normal"}
            textAlign={"center"}
          >
            {month.nickname}
          </Box>
        </Flex>
        <IconButton
          aria-label="Next month"
          icon={<ArrowRightIcon />}
          onClick={() => changeMonth(1)}
        />
      </Flex>
    </Box>
  );
}

export default Calendar;