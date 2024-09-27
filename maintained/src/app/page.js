import FaultCard from "@/components/Fault/FaultCardCondensed";
import faultData from "../test-data/fault-data";
import myFaultData from "../test-data/my-fault-data";
import { Box, Typography } from "@mui/material";
import MYFaultCard from "@/components/Fault/MyFaultCardCondensed";

export default function Page() {
  return (
    <Box
      sx={{
        marginTop: 2, 
        display: 'flex',
        flexDirection: 'row',
        width: '100vw', // Ensure the parent container uses full width
      }}
    >
      <Box
        sx={{
          width: '50%', // Set width to 50%
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          New Faults
        </Typography>
        {faultData.map((fault, index) => (
          <FaultCard key={index} fault={fault} />
        ))}
      </Box>
      <Box
         sx={{
          width: '50%', // Set width to 50%
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          My List
        </Typography>
        {myFaultData.map((fault, index) => (
          <MYFaultCard key={index} fault={fault} />
        ))}
      </Box>
    </Box>
  );
}