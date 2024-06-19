// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import CircularProgress, {
//   circularProgressClasses,
// } from "@mui/material/CircularProgress";
// import LinearProgress, {
//   linearProgressClasses,
// } from "@mui/material/LinearProgress";

// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//   height: 10,
//   borderRadius: 5,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor:
//       theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8/",
//   },
// }));
// // export default function CustomizedProgressBars(todos) {
// //   console.log(todos);
// //   return (
// //     <Stack spacing={2} sx={{ flexGrow: 1 }}>
// //       <br />
// //       <BorderLinearProgress variant="determinate" value={50} />
// //     </Stack>
// //   );
// // }
// const CustomizedProgressBars = (todos) => {
//   const totalTodos = todos.Array.filter(
//     (todo) => todo.isComplete === true
//   ).length;

//   const hundredPrecent = todos.length;
//   const precent = (totalTodos / hundredPrecent) * 100;
//   console.log(precent);
//   return (
//     <Stack spacing={2} sx={{ flexGrow: 1 }}>
//       <BorderLinearProgress variant="determinate" value={10} />
//     </Stack>
//   );
// };

// export default CustomizedProgressBars;
// CustomizedProgressBars.js
// CustomizedProgressBars.js
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CustomizedProgressBars = ({ todos }) => {
  const completedTodos = todos.filter((todo) => todo.isComplete).length;
  const totalTodos = todos.length;
  const progress = totalTodos === 0 ? 0 : (completedTodos / totalTodos) * 100;

  return (
    <Box sx={{ width: "100%", mt: 2 }} className="margin-block-0">
      {" "}
      <Typography
        variant="body2"
        color="text.secondary"
      >{`Progress: ${progress.toFixed(2)}%`}</Typography>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default CustomizedProgressBars;
