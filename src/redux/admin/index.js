import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils";

export const GetAdmin = createAsyncThunk("admin/get", async () => {
  return await axios.get(`${API_URL}/admin`).then((res) => res.data);
});
export const PostAdmin = createAsyncThunk("admin/post",async ({ config, body }) => {
    return await axios.post(`${API_URL}/admin`, body, config).then((res) => res.data.data);
  }
);
export const PutAdmin = createAsyncThunk("admin/put",async ({ config, body, id }) => {
    return await axios.put(`${API_URL}/admin/${id}`, body, config).then((res) => res.data.data);
  }
);
export const DeleteAdmin = createAsyncThunk("admin/delete",async ({ config, id }) => {
    return await axios.delete(`${API_URL}/admin/${id}`, config).then((res) => res.data.data);
  }
);

const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    getAdmin: {
      Loading: false,
      Error: false,
      Success: false,
      Data: [],
    },
    postAdmin: {
      Loading: false,
      Error: false,
      Success: false,
      Data: [],
    },
    putAdmin: {
      Loading: false,
      Error: false,
      Success: false,
      Data: [],
    },
    deleteAdmin: {
      Loading: false,
      Error: false,
      Success: false,
      Data: [],
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAdmin.pending, (state) => {
        state.getAdmin.Loading = true;
        state.getAdmin.Error = false;
        state.getAdmin.Success = false;
      })
      .addCase(GetAdmin.fulfilled, (state, action) => {
        state.getAdmin.Loading = false;
        state.getAdmin.Error = false;
        state.getAdmin.Success = true;
        state.getAdmin.Data = action.payload;
      })
      .addCase(GetAdmin.rejected, (state, action) => {
        state.getAdmin.Loading = false;
        state.getAdmin.Error = true;
        state.getAdmin.Success = false;
        state.getAdmin.Data = action.payload;
      })
      .addCase(PostAdmin.pending, (state) => {
        state.postAdmin.Loading = true;
        state.postAdmin.Error = false;
        state.postAdmin.Success = false;
      })
      .addCase(PostAdmin.fulfilled, (state, action) => {
        state.postAdmin.Loading = false;
        state.postAdmin.Error = false;
        state.postAdmin.Success = true;
        state.postAdmin.Data = action.payload;
      })
      .addCase(PostAdmin.rejected, (state, action) => {
        state.postAdmin.Loading = false;
        state.postAdmin.Error = true;
        state.postAdmin.Success = false;
        state.postAdmin.Data = action.payload;
      })
      .addCase(PutAdmin.pending, (state) => {
        state.putAdmin.Loading = true;
        state.putAdmin.Error = false;
        state.putAdmin.Success = false;
      })
      .addCase(PutAdmin.fulfilled, (state, action) => {
        state.putAdmin.Loading = false;
        state.putAdmin.Error = false;
        state.putAdmin.Success = true;
        state.putAdmin.Data = action.payload;
      })
      .addCase(PutAdmin.rejected, (state, action) => {
        state.putAdmin.Loading = false;
        state.putAdmin.Error = true;
        state.putAdmin.Success = false;
        state.putAdmin.Data = action.payload;
      })
      .addCase(DeleteAdmin.pending, (state) => {
        state.deleteAdmin.Loading = true;
        state.deleteAdmin.Error = false;
        state.deleteAdmin.Success = false;
      })
      .addCase(DeleteAdmin.fulfilled, (state, action) => {
        state.deleteAdmin.Loading = false;
        state.deleteAdmin.Error = false;
        state.deleteAdmin.Success = true;
        state.deleteAdmin.Data = action.payload;
      })
      .addCase(DeleteAdmin.rejected, (state, action) => {
        state.deleteAdmin.Loading = false;
        state.deleteAdmin.Error = true;
        state.deleteAdmin.Success = false;
        state.deleteAdmin.Data = action.payload;
      });
  },
});

export default AdminSlice.reducer;