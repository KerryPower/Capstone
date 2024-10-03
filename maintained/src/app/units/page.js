"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Select, MenuItem } from "@mui/material";
import UnitCardCondensed from "@/components/Unit/UnitCardCondensed";
import unitData from "../../test-data/units";
import Pagination from "@/components/Pagination/Pagination";
import { useRouter } from 'next/navigation';

export default function Page() {
    const [currentPage, setCurrentPage] = useState(1);
    const [ownerInput, setOwnerInput] = useState("");
    const [makeInput, setMakeInput] = useState("");
    const [serialNumberInput, setSerialNumberInput] = useState("");
    const [selectedUnitType, setSelectedUnitType] = useState("");
    const [sortOrder, setSortOrder] = useState("desc");

    const router = useRouter();
    const itemsPerPage = 30;

    const uniqueUnitTypes = [...new Set(unitData.map(unit => unit.unit_type))];

 
    const filteredUnits = unitData.filter(unit => (
        (ownerInput ? unit.owner.toLowerCase().includes(ownerInput.toLowerCase()) : true) &&
        (makeInput ? unit.make.toLowerCase().includes(makeInput.toLowerCase()) : true) &&
        (serialNumberInput ? unit.serial_number.toLowerCase().includes(serialNumberInput.toLowerCase()) : true) &&
        (selectedUnitType ? unit.unit_type === selectedUnitType : true)
    ));

    const sortedUnits = filteredUnits.sort((a, b) => {
        const faultA = a.fault_count || 0;
        const faultB = b.fault_count || 0;
        return sortOrder === "asc" ? faultA - faultB : faultB - faultA;
    });

    const totalPages = Math.ceil(sortedUnits.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = sortedUnits.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleUnitClick = (unit_id) => {
        console.log(`Navigating to: /units/${unit_id}`);
        router.push(`/units/${unit_id}`);
    };

    return (
        <Box sx={{ marginTop: 2, display: 'flex', flexDirection: 'column', width: '100vw', justifyContent: "space-around" }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: 2 }}>

                <TextField
                    value={serialNumberInput}
                    onChange={(e) => {
                        setSerialNumberInput(e.target.value);
                        setCurrentPage(1);
                    }}
                    placeholder="Search Serial Number"
                    variant="outlined"
                    sx={{ marginRight: 2, minWidth: 200 }}
                />

                <TextField
                    value={makeInput}
                    onChange={(e) => {
                        setMakeInput(e.target.value);
                        setCurrentPage(1);
                    }}
                    placeholder="Search Make"
                    variant="outlined"
                    sx={{ marginRight: 2, minWidth: 200 }}
                />

                <TextField
                    value={ownerInput}
                    onChange={(e) => {
                        setOwnerInput(e.target.value);
                        setCurrentPage(1);
                    }}
                    placeholder="Search Owner"
                    variant="outlined"
                    sx={{ marginRight: 2, minWidth: 200 }}
                />

                <Select
                    value={selectedUnitType}
                    onChange={(e) => {
                        setSelectedUnitType(e.target.value);
                        setCurrentPage(1);
                    }}
                    displayEmpty
                    sx={{ minWidth: 120 }}
                >
                    <MenuItem value="">
                        <em>All Unit Types</em>
                    </MenuItem>
                    {uniqueUnitTypes.map((unitType, index) => (
                        <MenuItem key={index} value={unitType}>
                            {unitType}
                        </MenuItem>
                    ))}
                </Select>
            </Box>

            {currentItems.length > 0 ? (
                currentItems.map((unit) => (
                    <UnitCardCondensed
                        key={unit.unit_id}
                        unit={unit}
                        onClick={() => handleUnitClick(unit.unit_id)}
                    />
                ))
            ) : (
                <Typography>No units available.</Typography>
            )}

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </Box>
    );
}
