import axios from 'axios';

const BASE_URL = 'http://localhost:3002/galleryimgs';

export const fetchItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
      console.error('Error fetching items:', error);
      throw error;
  }
};

export const addItem = async (item) => {
  try {
    const response = await axios.post(`${BASE_URL}`, item);
    return response.data;
  } catch (error) {
      console.error('Error adding item:', error);
      throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};

export const updateItem = async (id, updatedItem) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedItem);
    return response.data;
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
};
