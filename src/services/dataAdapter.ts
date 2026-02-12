// Data adapter interface for flexible backend switching
export interface DataAdapter {
  getWebsiteContent(page: string): Promise<any>;
  updateWebsiteContent(page: string, section: string, data: any): Promise<any>;
  uploadImage(file: File): Promise<any>;
  // Add other methods as needed
}

// Mock adapter (default)
export class MockDataAdapter implements DataAdapter {
  async getWebsiteContent(page: string) {
    // Import mock data dynamically to avoid circular dependencies
    const { default: mockData } = await import('../mocks/adminData');
    return { success: true, data: mockData[page] || {} };
  }

  async updateWebsiteContent(page: string, section: string, data: any) {
    console.log('Mock: updating', page, section, data);
    return { success: true, message: 'Mock update successful' };
  }

  async uploadImage(file: File) {
    console.log('Mock: uploading image', file.name);
    return { success: true, url: '/mock-image.jpg' };
  }
}

// Sanity adapter (future implementation)
export class SanityDataAdapter implements DataAdapter {
  async getWebsiteContent(page: string) {
    // TODO: Implement Sanity client integration
    console.log('Sanity: fetching', page);
    throw new Error('Sanity adapter not yet implemented');
  }

  async updateWebsiteContent(page: string, section: string, data: any) {
    // TODO: Implement Sanity mutations
    console.log('Sanity: updating', page, section, data);
    throw new Error('Sanity adapter not yet implemented');
  }

  async uploadImage(file: File) {
    // TODO: Implement Sanity image upload
    console.log('Sanity: uploading', file.name);
    throw new Error('Sanity adapter not yet implemented');
  }
}

// API adapter (wraps existing API service)
export class APIDataAdapter implements DataAdapter {
  private apiService: any;

  constructor() {
    // Dynamically import API service to avoid circular dependencies
    import('./api').then(module => {
      this.apiService = new module.default();
    });
  }

  async getWebsiteContent(page: string) {
    if (!this.apiService) {
      throw new Error('API service not initialized');
    }
    return this.apiService.getWebsiteContent(page);
  }

  async updateWebsiteContent(page: string, section: string, data: any) {
    if (!this.apiService) {
      throw new Error('API service not initialized');
    }
    return this.apiService.updateWebsiteContent(page, section, data);
  }

  async uploadImage(file: File) {
    if (!this.apiService) {
      throw new Error('API service not initialized');
    }
    return this.apiService.uploadImage(file);
  }
}

// Adapter factory
export function createDataAdapter(
  type: 'mock' | 'sanity' | 'api' = 'mock'
): DataAdapter {
  const adapterType = (import.meta.env.VITE_DATA_ADAPTER as string) || type;
  
  switch (adapterType) {
    case 'sanity':
      return new SanityDataAdapter();
    case 'api':
      return new APIDataAdapter();
    case 'mock':
    default:
      return new MockDataAdapter();
  }
}

// Default export for easy usage
export default createDataAdapter();
