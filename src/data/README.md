# Cracker Types Data Management

## Overview

This directory contains the data files and services for managing cracker categories and types. The data is currently stored in JSON files but is designed to be easily connected with Google Sheets for dynamic updates.

## Files

- `categories.json`: Contains the list of cracker categories with their properties
- `crackerTypes.json`: Contains the types of crackers organized by category
- `dataService.js`: Service functions for accessing and manipulating the data
- `products.js`: Mock product data that uses the categories

## Connecting with Google Sheets

To connect this application with Google Sheets for dynamic data management, follow these steps:

### 1. Set up Google Sheets

1. Create a new Google Sheet with two tabs:
   - **Categories**: with columns for id, name, description, icon, and path
   - **CrackerTypes**: with columns for category and type

2. Format your data in the sheets to match the structure of the JSON files:
   - In the Categories sheet, each row should represent one category
   - In the CrackerTypes sheet, use the category name as a key and list all types for that category

3. Publish your sheet to the web:
   - File > Share > Publish to web
   - Choose to publish the entire document or specific sheets
   - Get the published URL

### 2. Set up Google Forms (Optional)

If you want to update the data through forms:

1. Create a Google Form that submits to your Google Sheet
2. Set up form fields that match your data structure
3. Configure the form to append to your sheet

### 3. Modify the Data Service

Update the `dataService.js` file to fetch data from Google Sheets instead of local JSON:

```javascript
// Example implementation for fetching from Google Sheets

const SHEET_ID = 'your-sheet-id';
const CATEGORIES_RANGE = 'Categories!A2:E100'; // Adjust range as needed
const TYPES_RANGE = 'CrackerTypes!A2:B1000'; // Adjust range as needed

// Fetch categories from Google Sheets
export const fetchCategories = async () => {
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${CATEGORIES_RANGE}?key=${API_KEY}`
    );
    const data = await response.json();
    
    // Transform the data to match our structure
    return data.values.map((row, index) => ({
      id: parseInt(row[0]) || index + 1,
      name: row[1],
      description: row[2],
      icon: row[3],
      path: row[4]
    }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    // Fall back to local data if fetch fails
    return categories;
  }
};

// Fetch cracker types from Google Sheets
export const fetchCrackerTypes = async () => {
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TYPES_RANGE}?key=${API_KEY}`
    );
    const data = await response.json();
    
    // Transform the data to match our structure
    const typesMap = {};
    data.values.forEach(row => {
      const category = row[0];
      const type = row[1];
      
      if (!typesMap[category]) {
        typesMap[category] = [];
      }
      
      typesMap[category].push(type);
    });
    
    return typesMap;
  } catch (error) {
    console.error('Error fetching cracker types:', error);
    // Fall back to local data if fetch fails
    return crackerTypes;
  }
};
```

### 4. Implement Caching

To improve performance and handle offline scenarios, implement caching:

```javascript
// Add to dataService.js

// Cache duration in milliseconds (e.g., 1 hour)
const CACHE_DURATION = 60 * 60 * 1000;

// Get categories with caching
export const getCategories = async () => {
  const cachedData = localStorage.getItem('categories');
  const cachedTime = localStorage.getItem('categoriesTimestamp');
  
  // Check if cache is valid
  if (cachedData && cachedTime && (Date.now() - cachedTime < CACHE_DURATION)) {
    return JSON.parse(cachedData);
  }
  
  // Fetch fresh data
  const categories = await fetchCategories();
  
  // Update cache
  localStorage.setItem('categories', JSON.stringify(categories));
  localStorage.setItem('categoriesTimestamp', Date.now());
  
  return categories;
};

// Similar implementation for getCrackerTypes
```

### 5. Update Components

Update your React components to handle asynchronous data loading:

```javascript
// Example for CategoriesPage.js
import React, { useEffect, useState } from 'react';
import { getCategories } from '../data/dataService';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getCategories();
        setCategories(data.map(category => ({
          ...category,
          path: `/categories/${category.path}`
        })));
      } catch (error) {
        console.error('Error loading categories:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);
  
  if (loading) {
    return <div>Loading categories...</div>;
  }
  
  // Rest of your component
};
```

## Security Considerations

- Do not expose API keys in client-side code
- Consider using a serverless function or backend API to proxy requests to Google Sheets
- Implement proper authentication for any write operations
- Set appropriate sharing permissions on your Google Sheets

## Troubleshooting

- If data isn't loading, check browser console for errors
- Verify your Google Sheet is properly published and accessible
- Check that your API key has the necessary permissions
- Ensure your data format in Google Sheets matches what the application expects