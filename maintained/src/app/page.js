import FaultCard from "@/components/Fault/FaultCardCondensed";
import faultData from "../test-data/fault-data";
import { Box } from "@mui/material";

export default function Page() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          gap: 2,
          padding: 2
        }}>
        {faultData.map((fault, index) => (
          <FaultCard key={index} fault={fault} />
        ))}
      </Box>
    </>
  );
}