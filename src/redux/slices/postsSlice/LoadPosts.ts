import {createAsyncThunk} from "@reduxjs/toolkit";
import {loadJsonPosts} from "../../../axios/axios.ts";

export const loadPosts = createAsyncThunk(
    'postSlice/LoadPost',
    async (_, thunkAPI)=>{
  try {
      const posts = await loadJsonPosts()
      return thunkAPI.fulfillWithValue(posts)
  }
  catch (e){
      console.log('Some error:', e)
      return thunkAPI.rejectWithValue({e
      })
  }
  })
