import { useState, useCallback } from 'react';

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

  const saveContent = useCallback(async (): Promise<boolean> => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const saveAllContent = useCallback(async (): Promise<boolean> => {
    return saveContent();
  }, [saveContent]);

  const uploadImage = useCallback(async (file: File): Promise<string | null> => {
    if (!file) return null;
    return URL.createObjectURL(file);
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
