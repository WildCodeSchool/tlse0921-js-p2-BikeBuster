import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Count = (props) => {
  const { count, handleMoreBikes, handleLessBikes } = props;
  return (
    <div className="counter">
      <Stack spacing={2} direction="row">
        <Button type="button" onClick={handleMoreBikes} variant="contained">
          -
        </Button>
      </Stack>
      <p>{count}</p>
      <Stack spacing={2} direction="row">
        <Button type="button" onClick={handleLessBikes} variant="contained">
          +
        </Button>
      </Stack>
    </div>
  );
};

export default Count;
