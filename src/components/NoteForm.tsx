import { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Note } from '../types/note';

interface NoteFormProps {
    note?: Note;
    onSubmit: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => void;
    onCancel: () => void;
}

// Component for creating and editing notes
const NoteForm: React.FC<NoteFormProps> = ({ note, onSubmit, onCancel }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Initialize form with note data if editing
    useEffect(() => {
        if (note) {
            setTitle(note.title);
            setContent(note.content);
        }
    }, [note]);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, content });
        if (!note) {
            setTitle('');
            setContent('');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
            <TextField
                fullWidth
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                margin="normal"
                required
                multiline
                rows={4}
            />
            <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                <Button type="submit" variant="contained" color="primary">
                    {note ? 'Update Note' : 'Create Note'}
                </Button>
                <Button onClick={onCancel} variant="outlined">
                    Cancel
                </Button>
            </Box>
        </Box>
    );
};

export default NoteForm; 