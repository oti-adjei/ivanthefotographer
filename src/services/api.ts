// API Service for backend communication
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }

      return {
        success: true,
        data: data.data || data,
        message: data.message,
      };
    } catch (error) {
      console.error('API Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  // Website Content APIs
  async getWebsiteContent(page: string) {
    return this.request(`/website-content/${page}`, {
      method: 'GET',
    });
  }

  async updateWebsiteContent(page: string, section: string, data: any) {
    return this.request(`/website-content/${page}/${section}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async saveAllWebsiteContent(data: any) {
    return this.request('/website-content/bulk-update', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Home Page APIs
  async updateHeroSection(data: any) {
    return this.request('/website-content/home/hero', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async updateSelectedWorks(data: any) {
    return this.request('/website-content/home/selected-works', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async updateAboutPreview(data: any) {
    return this.request('/website-content/home/about-preview', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async updateCTA(data: any) {
    return this.request('/website-content/home/cta', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // About Page APIs
  async updateAboutHero(data: any) {
    return this.request('/website-content/about/hero', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async updateAboutMain(data: any) {
    return this.request('/website-content/about/main', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async updateServices(data: any) {
    return this.request('/website-content/about/services', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async addService(data: any) {
    return this.request('/website-content/about/services', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async deleteService(index: number) {
    return this.request(`/website-content/about/services/${index}`, {
      method: 'DELETE',
    });
  }

  async updatePhilosophy(data: any) {
    return this.request('/website-content/about/philosophy', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Contact Page APIs
  async updateContactHero(data: any) {
    return this.request('/website-content/contact/hero', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async updateContactInfo(data: any) {
    return this.request('/website-content/contact/info', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async updateFAQs(data: any) {
    return this.request('/website-content/contact/faqs', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async addFAQ(data: any) {
    return this.request('/website-content/contact/faqs', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async deleteFAQ(index: number) {
    return this.request(`/website-content/contact/faqs/${index}`, {
      method: 'DELETE',
    });
  }

  // Collaborations Page APIs
  async updateCollabHero(data: any) {
    return this.request('/website-content/collaborations/hero', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async updateCollabIntro(data: any) {
    return this.request('/website-content/collaborations/intro', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async updateCollabGroups(data: any) {
    return this.request('/website-content/collaborations/groups', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async addCollabGroup(data: any) {
    return this.request('/website-content/collaborations/groups', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async deleteCollabGroup(index: number) {
    return this.request(`/website-content/collaborations/groups/${index}`, {
      method: 'DELETE',
    });
  }

  async updateTestimonials(data: any) {
    return this.request('/website-content/collaborations/testimonials', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async addTestimonial(data: any) {
    return this.request('/website-content/collaborations/testimonials', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async deleteTestimonial(index: number) {
    return this.request(`/website-content/collaborations/testimonials/${index}`, {
      method: 'DELETE',
    });
  }

  // Image Upload API
  async uploadImage(file: File, folder: string = 'website') {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('folder', folder);

    try {
      const response = await fetch(`${API_BASE_URL}/upload/image`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Image upload failed');
      }

      return {
        success: true,
        data: data.data,
        message: data.message,
      };
    } catch (error) {
      console.error('Upload Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Upload failed',
      };
    }
  }
}

export const apiService = new ApiService();
export default apiService;
