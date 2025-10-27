import { recipe } from '@vanilla-extract/recipes';

export const styles = {
  td: recipe({
    base: {
      width: '10px',
      height: '10px',
      borderRadius: '4px',
    },
    variants: {
      intensity: {
        0: { backgroundColor: '#151b23' },
        1: { backgroundColor: '#033a16' },
        2: { backgroundColor: '#196c2e' },
        3: { backgroundColor: '#2ea043' },
        4: { backgroundColor: '#56d364' },
      },
    },
  }),
};
