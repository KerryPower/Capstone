import { Box, Typography } from "@mui/material";
import UnitCardCondensed from "@/components/Unit/UnitCardCondensed";
import unitData from "../../test-data/unit-data";

export default function Page() {
    return (
        <Box
            sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column', // Change to column for vertical layout
                width: '100vw', // Ensure the parent container uses full width
            }}
        >
            {unitData && unitData.length > 0 ? (
                unitData.map((unit, index) => (
                    <UnitCardCondensed key={index} unit={unit} />
                ))
            ) : (
                <Typography>No units available.</Typography>
            )}
        </Box>
    );
}
