'use client';

import { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import NoteForm from '../components/NoteForm';
import NoteCard from '../components/NoteCard';
import { Note } from '../types/note';

// Temporary mock data for development
const mockNotes: Note[] = [
    {
        id: '1',
        title: 'Welcome Note',
        content: 'Welcome to your AAAAAnote-taking app!',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

export default function Home() {
    const [notes, setNotes] = useState<Note[]>(mockNotes);
    const [editingNote, setEditingNote] = useState<Note | undefined>();

    // Handle creating a new note
    const handleCreateNote = (noteData: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => {
        const newNote: Note = {
            ...noteData,
            id: Date.now().toString(),
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        setNotes([...notes, newNote]);
    };

    // Handle updating an existing note
    const handleUpdateNote = (noteData: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => {
        if (editingNote) {
            const updatedNotes = notes.map((note) =>
                note.id === editingNote.id
                    ? { ...note, ...noteData, updatedAt: new Date() }
                    : note
            );
            setNotes(updatedNotes);
            setEditingNote(undefined);
        }
    };

    // Handle deleting a note
    const handleDeleteNote = (id: string) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    // Handle editing a note
    const handleEditNote = (note: Note) => {
        setEditingNote(note);
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom>
                My Notes
            </Typography>
            
            <NoteForm
                note={editingNote}
                onSubmit={editingNote ? handleUpdateNote : handleCreateNote}
                onCancel={() => setEditingNote(undefined)}
            />

            <Box sx={{ mt: 4 }}>
                {notes.map((note) => (
                    <NoteCard
                        key={note.id}
                        note={note}
                        onEdit={handleEditNote}
                        onDelete={handleDeleteNote}
                    />
                ))}
            </Box>
        </Container>
    );
}
