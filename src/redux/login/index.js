import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils";

export const PostLogin = createAsyncThunk("login/post",async (body) => {
    return await axios.post(`${API_URL}/login`, body).then((res) => res.data.data);
  }
);

const LoginSlice = createSlice({
  name: "login",
  initialState: {
    postLogin: {
      Loading: false,
      Error: false,
      Success: false,
      Data: [],
    }
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PostLogin.pending, (state) => {
        state.postLogin.Loading = true;
        state.postLogin.Error = false;
        state.postLogin.Success = false;
      })
      .addCase(PostLogin.fulfilled, (state, action) => {
        state.postLogin.Loading = false;
        state.postLogin.Error = false;
        state.postLogin.Success = true;
        state.postLogin.Data = action.payload;
      })
      .addCase(PostLogin.rejected, (state, action) => {
        state.postLogin.Loading = false;
        state.postLogin.Error = true;
        state.postLogin.Success = false;
        state.postLogin.Data = action.payload;
      })

  },
});

export default LoginSlice.reducer;