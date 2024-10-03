"use client";
import FaultCard from "@/components/Fault/FaultCardCondensed";
import faultData from "../../test-data/faults";
import { Box, Typography, TextField } from "@mui/material";
import MYFaultCard from "@/components/Fault/MyFaultCardCondensed";
import Pagination from "@/components/Pagination/Pagination";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [newFaults, setNewFaults] = useState([]);
  const [myFaults, setMyFaults] = useState([]);
  const [serialFilter, setSerialFilter] = useState('');
  const [urgencyFilter, setUrgencyFilter] = useState('');
  const [mySerialFilter, setMySerialFilter] = useState('');
  const [myUrgencyFilter, setMyUrgencyFilter] = useState('');

  const [currentPageNew, setCurrentPageNew] = useState(1);
  const [currentPageMy, setCurrentPageMy] = useState(1);
  const faultsPerPage = 20;

  const router = useRouter();

  useEffect(() => {
    const sortedFaults = faultData.sort((a, b) => {
      return a.urgency - b.urgency; 
    });
    setNewFaults(sortedFaults);
  }, []);

  const handleFaultClick = (fault_id) => {
    router.push(`/faults/${fault_id}`);
  };

  const handleAddToMyList = (selectedFault) => {
    setNewFaults((prevFaults) => prevFaults.filter((fault) => fault !== selectedFault));
    setMyFaults((prevMyFaults) => [...prevMyFaults, selectedFault]);
  };

  const handleRemoveFromMyList = (selectedFault) => {
    setMyFaults((prevMyFaults) => prevMyFaults.filter((fault) => fault !== selectedFault));
    setNewFaults((prevFaults) => [...prevFaults, selectedFault]);

    const newFilteredFaults = newFaults.filter(fault => 
      (serialFilter === '' || String(fault.serial_number).toLowerCase().includes(serialFilter.toLowerCase())) &&
      (urgencyFilter === '' || String(fault.urgency).includes(urgencyFilter))
    );

    if (newFilteredFaults.length <= (currentPageNew - 1) * faultsPerPage) {
      setCurrentPageNew(Math.max(currentPageNew - 1, 1));
    }
  };

  const filteredNewFaults = newFaults.filter(fault => {
    return (
      (serialFilter === '' || String(fault.serial_number).toLowerCase().includes(serialFilter.toLowerCase())) &&
      (urgencyFilter === '' || String(fault.urgency).includes(urgencyFilter))
    );
  });

  const filteredMyFaults = myFaults.filter(fault => {
    return (
      (mySerialFilter === '' || String(fault.serial_number).toLowerCase().includes(mySerialFilter.toLowerCase())) &&
      (myUrgencyFilter === '' || String(fault.urgency).includes(myUrgencyFilter))
    );
  });

  const totalPagesNew = Math.ceil(filteredNewFaults.length / faultsPerPage);
  const startIndexNew = (currentPageNew - 1) * faultsPerPage;
  const currentFaults = filteredNewFaults.slice(startIndexNew, startIndexNew + faultsPerPage);

  const totalPagesMy = Math.ceil(filteredMyFaults.length / faultsPerPage);
  const startIndexMy = (currentPageMy - 1) * faultsPerPage;
  const currentMyFaults = filteredMyFaults.slice(startIndexMy, startIndexMy + faultsPerPage);

  return (
    <Box
      sx={{
        marginTop: 2,
        display: 'flex',
        flexDirection: 'row',
        width: '100vw',
      }}
    >
      <Box
        sx={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          New Faults
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: "space-evenly",
            marginBottom: 2
          }}
        >
          <TextField
            label="Filter by Serial Number"
            variant="outlined"
            value={serialFilter}
            onChange={(e) => setSerialFilter(e.target.value)}
            sx={{
              marginBottom: 2,
              width: '40%'
            }}
          />
          <TextField
            label="Filter by Urgency"
            variant="outlined"
            value={urgencyFilter}
            onChange={(e) => setUrgencyFilter(e.target.value)}
            sx={{
              marginBottom: 2,
              width: '40%'
            }}
          />
        </Box>
        {currentFaults.map((fault, index) => (
          <FaultCard
            key={fault.fault_id}
            fault={fault}
            onAdd={() => handleAddToMyList(fault)}
            onOpen={() => handleFaultClick(fault.fault_id)} 
          />
        ))}
        
        <Pagination
          currentPage={currentPageNew}
          totalPages={totalPagesNew}
          onPageChange={setCurrentPageNew}
        />
      </Box>
      <Box
        sx={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          My List
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: "space-evenly",
            marginBottom: 2
          }}
        >
          <TextField
            label="Filter by Serial Number"
            variant="outlined"
            value={mySerialFilter}
            onChange={(e) => setMySerialFilter(e.target.value)}
            sx={{
              marginBottom: 2,
              width: '40%'
            }}
          />
          <TextField
            label="Filter by Urgency"
            variant="outlined"
            value={myUrgencyFilter}
            onChange={(e) => setMyUrgencyFilter(e.target.value)}
            sx={{
              marginBottom: 2,
              width: '40%'
            }}
          />
        </Box>
        {currentMyFaults.map((fault, index) => (
          <MYFaultCard
            key={index}
            fault={fault}
            onRemove={() => handleRemoveFromMyList(fault)}
            onOpen={() => handleFaultClick(fault.fault_id)}
          />
        ))}

        <Pagination
          currentPage={currentPageMy}
          totalPages={totalPagesMy}
          onPageChange={setCurrentPageMy}
        />
      </Box>
    </Box>
  );
}
