import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils";

export const GetData = createAsyncThunk("data/get", async () => {
  return await axios.get(`${API_URL}/data`).then((res) => res.data);
});
export const PostData = createAsyncThunk("data/post",async ({ config, body }) => {
    return await axios.post(`${API_URL}/data`, body, config).then((res) => res.data.data);
  }
);
export const PutData = createAsyncThunk("data/put",async ({ config, body, id }) => {
    return await axios.put(`${API_URL}/data/${id}`, body, config).then((res) => res.data.data);
  }
);
export const DeleteData = createAsyncThunk("data/delete",async ({ config, id }) => {
    return await axios.delete(`${API_URL}/data/${id}`, config).then((res) => res.data.data);
  }
);

const DataSlice = createSlice({
  name: "data",
  initialState: {
    getData: {
      Loading: false,
      Error: false,
      Success: false,
      Data: [],
    },
    postData: {
      Loading: false,
      Error: false,
      Success: false,
      Data: [],
    },
    putData: {
      Loading: false,
      Error: false,
      Success: false,
      Data: [],
    },
    deleteData: {
      Loading: false,
      Error: false,
      Success: false,
      Data: [],
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetData.pending, (state) => {
        state.getData.Loading = true;
        state.getData.Error = false;
        state.getData.Success = false;
      })
      .addCase(GetData.fulfilled, (state, action) => {
        state.getData.Loading = false;
        state.getData.Error = false;
        state.getData.Success = true;
        state.getData.Data = action.payload;
      })
      .addCase(GetData.rejected, (state, action) => {
        state.getData.Loading = false;
        state.getData.Error = true;
        state.getData.Success = false;
        state.getData.Data = action.payload;
      })
      // Repeat similar patterns for other actions (PostData, PutData, DeleteData)
      .addCase(PostData.pending, (state) => {
        state.postData.Loading = true;
        state.postData.Error = false;
        state.postData.Success = false;
      })
      .addCase(PostData.fulfilled, (state, action) => {
        state.postData.Loading = false;
        state.postData.Error = false;
        state.postData.Success = true;
        state.postData.Data = action.payload;
      })
      .addCase(PostData.rejected, (state, action) => {
        state.postData.Loading = false;
        state.postData.Error = true;
        state.postData.Success = false;
        state.postData.Data = action.payload;
      })
      .addCase(PutData.pending, (state) => {
        state.putData.Loading = true;
        state.putData.Error = false;
        state.putData.Success = false;
      })
      .addCase(PutData.fulfilled, (state, action) => {
        state.putData.Loading = false;
        state.putData.Error = false;
        state.putData.Success = true;
        state.putData.Data = action.payload;
      })
      .addCase(PutData.rejected, (state, action) => {
        state.putData.Loading = false;
        state.putData.Error = true;
        state.putData.Success = false;
        state.putData.Data = action.payload;
      })
      .addCase(DeleteData.pending, (state) => {
        state.deleteData.Loading = true;
        state.deleteData.Error = false;
        state.deleteData.Success = false;
      })
      .addCase(DeleteData.fulfilled, (state, action) => {
        state.deleteData.Loading = false;
        state.deleteData.Error = false;
        state.deleteData.Success = true;
        state.deleteData.Data = action.payload;
      })
      .addCase(DeleteData.rejected, (state, action) => {
        state.deleteData.Loading = false;
        state.deleteData.Error = true;
        state.deleteData.Success = false;
        state.deleteData.Data = action.payload;
      });
  },
});

export default DataSlice.reducer;






// import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { API_URL } from "../../utils";

// export const GetData = createAsyncThunk("data/get", async() => {
//     return await axios.get(`${API_URL}/data`).then(res => res.data)
// })
// export const PostData = createAsyncThunk("data/post", async({config,body}) => {
//     return await axios.post(`${API_URL}/data`,body,config).then(res => res.data.data)
// })
// export const PutData = createAsyncThunk("data/post", async({config,body,id}) => {
//     return await axios.put(`${API_URL}/data/${id}`,body,config).then(res => res.data.data)
// })
// export const DeleteData = createAsyncThunk("data/post", async({config,id}) => {
//     return await axios.post(`${API_URL}/data/${id}`,config).then(res => res.data.data)
// })

// const DataSlice = createSlice({
//     name:"data",
//     initialState:{
//         getData:{
//             Loading: false,
//             Error: false,
//             Success: false,
//             Data: []
//         },
//         postData:{
//             Loading: false,
//             Error: false,
//             Success: false,
//             Data: []
//         },
//         putData:{
//             Loading: false,
//             Error: false,
//             Success: false,
//             Data: []
//         },
//         deleteData:{
//             Loading: false,
//             Error: false,
//             Success: false,
//             Data: []
//         }
//     },
//     extraReducers:{
//         [GetData.pending] : (state,action) => {
//             state.getData.Loading = true;
//             state.getData.Error = false;
//             state.getData.Success = false;
//         },
//         [GetData.fulfilled] : (state,action) => {
//             state.getData.Loading = false;
//             state.getData.Error = false;
//             state.getData.Success = true;
//             state.getData.Data = action.payload;
//         },
//         [GetData.rejected] : (state,action) => {
//             state.getData.Loading = false;
//             state.getData.Error = true;
//             state.getData.Success = false;
//             state.getData.Data = action.payload;
//         },//
//         [PostData.pending] : (state,action) => {
//             state.postData.Loading = true;
//             state.postData.Error = false;
//             state.postData.Success = false;
//         },
//         [PostData.fulfilled] : (state,action) => {
//             state.postData.Loading = false;
//             state.postData.Error = false;
//             state.postData.Success = true;
//             state.postData.Data = action.payload;
//         },
//         [PostData.rejected] : (state,action) => {
//             state.postData.Loading = false;
//             state.postData.Error = true;
//             state.postData.Success = false;
//             state.postData.Data = action.payload;
//         },//
//         [PutData.pending] : (state,action) => {
//             state.putData.Loading = true;
//             state.putData.Error = false;
//             state.putData.Success = false;
//         },
//         [PutData.fulfilled] : (state,action) => {
//             state.putData.Loading = false;
//             state.putData.Error = false;
//             state.putData.Success = true;
//             state.putData.Data = action.payload;
//         },
//         [PutData.rejected] : (state,action) => {
//             state.putData.Loading = false;
//             state.putData.Error = true;
//             state.putData.Success = false;
//             state.putData.Data = action.payload;
//         },//
//         [DeleteData.pending] : (state,action) => {
//             state.deleteData.Loading = true;
//             state.deleteData.Error = false;
//             state.deleteData.Success = false;
//         },
//         [DeleteData.fulfilled] : (state,action) => {
//             state.deleteData.Loading = false;
//             state.deleteData.Error = false;
//             state.deleteData.Success = true;
//             state.deleteData.Data = action.payload;
//         },
//         [DeleteData.rejected] : (state,action) => {
//             state.deleteData.Loading = false;
//             state.deleteData.Error = true;
//             state.deleteData.Success = false;
//             state.deleteData.Data = action.payload;
//         }
//     }
// })
// export const {} = DataSlice.actions;
// export default DataSlice.reducer