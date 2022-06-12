import axios from 'axios';
import React from 'react';


export default axios.create({
    baseURL: 'http://localhost:4192/api'
  });