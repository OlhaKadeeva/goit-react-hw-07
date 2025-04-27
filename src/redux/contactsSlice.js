import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [] },

  reducers: {
    addContact: {
      prepare({ name, number }) {
        return { payload: { id: nanoid(), name, number } };
      },
      reducer(state, action) {
        state.items.push(action.payload);
      },
    },

    deleteContact(state, action) {
      const index = state.items.findIndex((c) => c.id === action.payload);
      if (index !== -1) state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
