import { style } from '@vanilla-extract/css';

export const Td = style({
  width: '40px',
  height: '40px',
  border: '1px solid black',
  userSelect: 'none', // カーソルが表示されないように
});
