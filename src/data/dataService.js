// Data service for managing categories and cracker types
// This will be the central point for loading data and can be extended to connect with Google Sheets

import categories from './categories.json';
import crackerTypes from './crackerTypes.json';

/**
 * Get all categories
 * @returns {Array} Array of category objects
 */
export const getCategories = () => {
  return categories;
};

/**
 * Get a category by its path
 * @param {string} path - The category path
 * @returns {Object|null} The category object or null if not found
 */
export const getCategoryByPath = (path) => {
  return categories.find(category => category.path === path) || null;
};

/**
 * Get a category by its ID
 * @param {number} id - The category ID
 * @returns {Object|null} The category object or null if not found
 */
export const getCategoryById = (id) => {
  return categories.find(category => category.id === id) || null;
};

/**
 * Get all cracker types
 * @returns {Object} Object with category names as keys and arrays of cracker types as values
 */
export const getCrackerTypes = () => {
  return crackerTypes;
};

/**
 * Get cracker types for a specific category
 * @param {string} categoryName - The category name
 * @returns {Array|null} Array of cracker types or null if category not found
 */
export const getCrackerTypesByCategory = (categoryName) => {
  return crackerTypes[categoryName] || null;
};

/**
 * Get path-to-name mapping for categories
 * @returns {Object} Object with paths as keys and names as values
 */
export const getCategoryPathMapping = () => {
  const mapping = {};
  categories.forEach(category => {
    mapping[category.path] = category.name;
  });
  return mapping;
};

// This function can be implemented later to save data back to Google Sheets
export const saveData = async (data) => {
  console.log('Data saving functionality will be implemented to connect with Google Sheets');
  console.log('Data to be saved:', data);
  // Implementation for Google Sheets connection will go here
  return true;
};