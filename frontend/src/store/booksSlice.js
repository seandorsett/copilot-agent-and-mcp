import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const res = await fetch('http://localhost:4000/api/books');
  return res.json();
});

const booksSlice = createSlice({
  name: 'books',
  initialState: { 
    items: [], 
    status: 'idle',
    sortBy: 'title',
    sortOrder: 'asc'
  },
  reducers: {
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setSortOrder(state, action) {
      state.sortOrder = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBooks.pending, state => { state.status = 'loading'; })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchBooks.rejected, state => { state.status = 'failed'; });
  },
});

export const { setSortBy, setSortOrder } = booksSlice.actions;
export default booksSlice.reducer;
