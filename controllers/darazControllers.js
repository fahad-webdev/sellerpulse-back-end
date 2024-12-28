const axios = require("axios");
const catchAsync = require("../utils/catchAsync");
// Connect Shopify store
const connectDarazStore = catchAsync(async (req, res) => {
    const {Store_Name, API_Secret , API_key} = req.body;
    const store_name = process.env.store_name;
    const api_secret = process.env.api_secret;
    const api_key = process.env.api_key;

  
    if (!Store_Name || !API_Secret || !API_key) {
      return res.status(400).json({ message: "Missing required credentials" });
    }
    if(API_key!=api_key || API_Secret!=api_secret || Store_Name!=store_name){
        return res.status(400).json({ message: "Invalid credentials" });
    }
  
    // Test credentials by making a sample API call
    const darazUrl = `https://dummyjson.com/products/search?q=all`;
  
    try {
      await axios.get(darazUrl);
  
      // Save credentials in session
      req.session.daraz = {  API_key, API_Secret, Store_Name };
      res.status(200).json({ message: "Store connected successfully" });
    } catch (error) {
      console.error("Error connecting store:", error.message);
      res.status(401).json({ message: "Invalid credentials or URL" });
    }
  });
  
  module.exports = { connectDarazStore };
  