// components/SimpleFilter.js
import { TextField } from "@mui/material";
import { useEffect } from "react";

export default function SimpleFilter({ label, filterValue, setFilterValue, data, filterCriteria }) {
  useEffect(() => {
    if (setFilterValue && filterCriteria) {
      const filteredData = data.filter(item => {
        return (
          (filterCriteria.name === '' || String(item.filterCriteria.value).toLowerCase().includes(filterCriteria.name.toLowerCase()))
        );
      });
      setFilterValue(filteredData);
    }
  }, [filterValue, data, filterCriteria, setFilterValue]);

  const handleChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <TextField
      label={label}
      variant="outlined"
      value={filterValue}
      onChange={handleChange}
      sx={{
        marginBottom: 2,
        width: '40%',
      }}
    />
  );
}