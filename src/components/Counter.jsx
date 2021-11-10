import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Count = ({ initialValue = 1 }) => {
  const [count, setCount] = useState(initialValue);
  return (
    <div className="counter">
      <Stack spacing={2} direction="row">
        <Button
          type="button"
          onClick={() => { if (count > 1) { setCount((prevCount) => prevCount - 1); } }}
          variant="contained"
        >
          -
        </Button>
      </Stack>
      <h1>{count}</h1>
      <Stack spacing={2} direction="row">
        <Button
          type="button"
          onClick={() => { if (count < 20) { setCount((prevCount) => prevCount + 1); } }}
          variant="contained"
        >
          +
        </Button>
      </Stack>
    </div>
  );
};

export default Count;
