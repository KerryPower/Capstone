"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    TextField,
    Typography,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const FaultsManager = ({ fault, faultsData }) => { 
    const router = useRouter();
    const [currentFault, setCurrentFault] = useState(fault);
    const [editing, setEditing] = useState(false);
    const [newPhoto, setNewPhoto] = useState('');

    const handleEdit = () => {
        setEditing(true);
    };

    const handleDelete = () => {
        const updatedFaults = faultsData.filter((f) => f.fault_id !== currentFault.fault_id);
        router.push('/faults');
    };

    const handleUpdate = () => {
        setEditing(false);
    };

    const handleAddPhoto = () => {
        if (newPhoto) {
            const updatedPictures = [...currentFault.pictures, newPhoto];
            setCurrentFault({ ...currentFault, pictures: updatedPictures });
            setNewPhoto('');
        }
    };

    const handleRemovePhoto = (photo) => {
        const updatedPictures = currentFault.pictures.filter((p) => p !== photo);
        setCurrentFault({ ...currentFault, pictures: updatedPictures });
    };

    return (
        <Box p={4}>
            <Typography variant="h4" gutterBottom>
                Fault Manager
            </Typography>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5">{currentFault.title}</Typography>
                    <Typography variant="body2"><strong>Serial Number:</strong> {currentFault.serial_number}</Typography>
                    <Typography variant="body2"><strong>Description:</strong> {currentFault.description}</Typography>
                    <Typography variant="body2"><strong>Urgency:</strong> {currentFault.urgency}</Typography>
                    <Box mt={2}>
                        <IconButton onClick={handleEdit}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={handleDelete}>
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                    {currentFault.pictures.length > 0 && (
                        <Box display="flex" mt={1}>
                            {currentFault.pictures.map((pic, index) => (
                                <CardMedia key={index} component="img" src={pic} alt="Fault" sx={{ width: 100, height: 100, objectFit: 'cover', mr: 1 }} />
                            ))}
                        </Box>
                    )}
                </CardContent>
            </Card>

            {editing && (
                <Card variant="outlined" sx={{ mt: 4 }}>
                    <CardContent>
                        <Typography variant="h5">Edit Fault</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Title"
                            value={currentFault.title}
                            onChange={(e) => setCurrentFault({ ...currentFault, title: e.target.value })}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Description"
                            value={currentFault.description}
                            onChange={(e) => setCurrentFault({ ...currentFault, description: e.target.value })}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            type="number"
                            label="Urgency"
                            value={currentFault.urgency}
                            onChange={(e) => setCurrentFault({ ...currentFault, urgency: Number(e.target.value) })}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Add Photo URL"
                            value={newPhoto}
                            onChange={(e) => setNewPhoto(e.target.value)}
                        />
                        <Button variant="contained" onClick={handleAddPhoto}>Add Photo</Button>
                        <Box mt={2}>
                            <Typography variant="h6">Current Photos:</Typography>
                            {currentFault.pictures.map((photo, index) => (
                                <Box key={index} display="flex" alignItems="center">
                                    <CardMedia component="img" src={photo} alt="Fault" sx={{ width: 100, height: 100, objectFit: 'cover', mr: 1 }} />
                                    <Button variant="outlined" onClick={() => handleRemovePhoto(photo)}>Remove Photo</Button>
                                </Box>
                            ))}
                        </Box>
                        <Button variant="contained" onClick={handleUpdate} sx={{ mt: 2 }}>Update Fault</Button>
                    </CardContent>
                </Card>
            )}
        </Box>
    );
};

export default FaultsManager;
