// interface ruleInterFace {
//   name: {
//     require: {
//       value: boolean;
//       message: string;
//     };
//     validate: {
//       kytu: () => void;
//     };
//   };
// }
// export const rule = () => {
//   const rules = {
//     name: {
//       require: {value: true},
//       message: 'Điền đầy đủ thông tin',
//     },
//     validate: {
//       kytu: (value: string | number) =>
//         /^[^0-9]+$/.test(value) || 'Vui lòng nhập chữ',
//     },
//   };
//   return rules;
// };
