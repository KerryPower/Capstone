"use client";

import { Box, Typography } from "@mui/material";
import CompanyCardCondensed from "@/components/Customer/CustomerCardCondensed";
import { useRouter } from 'next/navigation';
import companies from "../../test-data/companies";

export default function Page() {
    const router = useRouter();

    const handleUnitClick = (company_id) => {
        router.push(`/companies/${company_id}`);
    };

    return (
        <Box
            sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
            }}
        >
            {companies && companies.length > 0 ? (
                companies.map((company) => (
                    <CompanyCardCondensed 
                        key={company.company_id} 
                        company={company}
                        onClick={() => handleUnitClick(company.company_id)}
                    />
                ))
            ) : (
                <Typography>No units available.</Typography>
            )}
        </Box>
    );
}
