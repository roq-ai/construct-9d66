import axios from 'axios';
import queryString from 'query-string';
import { TimeEntryInterface, TimeEntryGetQueryInterface } from 'interfaces/time-entry';
import { GetQueryInterface } from '../../interfaces';

export const getTimeEntries = async (query?: TimeEntryGetQueryInterface) => {
  const response = await axios.get(`/api/time-entries${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createTimeEntry = async (timeEntry: TimeEntryInterface) => {
  const response = await axios.post('/api/time-entries', timeEntry);
  return response.data;
};

export const updateTimeEntryById = async (id: string, timeEntry: TimeEntryInterface) => {
  const response = await axios.put(`/api/time-entries/${id}`, timeEntry);
  return response.data;
};

export const getTimeEntryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/time-entries/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTimeEntryById = async (id: string) => {
  const response = await axios.delete(`/api/time-entries/${id}`);
  return response.data;
};
