
import { Button, Box, Typography } from '@mui/material';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
      <Button
        variant="outlined"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === totalPages || totalPages === 0 }
      >
        Previous
      </Button>
      <Typography sx={{ margin: '0 1rem' }}>
        Page {currentPage} of {totalPages}
      </Typography>
      <Button
        variant="outlined"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0 }
      >
        Next
      </Button>
    </Box>
  );
};

export default Pagination;