import { useState, useCallback } from 'react';
import apiService from '../services/api';

interface UseWebsiteContentReturn {
  loading: boolean;
  error: string | null;
  success: boolean;
  saveContent: (page: string, section: string, data: any) => Promise<boolean>;
  saveAllContent: (data: any) => Promise<boolean>;
  uploadImage: (file: File, folder?: string) => Promise<string | null>;
  clearMessages: () => void;
}

export const useWebsiteContent = (): UseWebsiteContentReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const clearMessages = useCallback(() => {
    setError(null);
    setSuccess(false);
  }, []);

  const saveContent = useCallback(async (page: string, section: string, data: any): Promise<boolean> => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await apiService.updateWebsiteContent(page, section, data);
      
      if (response.success) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        return true;
      } else {
        setError(response.error || 'Failed to save content');
        return false;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const saveAllContent = useCallback(async (data: any): Promise<boolean> => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await apiService.saveAllWebsiteContent(data);
      
      if (response.success) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        return true;
      } else {
        setError(response.error || 'Failed to save all content');
        return false;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const uploadImage = useCallback(async (file: File, folder: string = 'website'): Promise<string | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiService.uploadImage(file, folder);
      
      if (response.success && response.data?.url) {
        return response.data.url;
      } else {
        setError(response.error || 'Failed to upload image');
        return null;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    success,
    saveContent,
    saveAllContent,
    uploadImage,
    clearMessages,
  };
};
