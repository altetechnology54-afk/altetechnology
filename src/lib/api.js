const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchCatalogSections() {
    try {
        const res = await fetch(`${API_BASE_URL}/catalog-sections`, {
            next: { revalidate: 0 } // Real-time updates
        });
        const data = await res.json();
        return data.success ? data.data : [];
    } catch (error) {
        console.error('Error fetching catalog sections:', error);
        return [];
    }
}

export async function fetchCatalogSection(id) {
    try {
        const res = await fetch(`${API_BASE_URL}/catalog-sections/${id}`, {
            next: { revalidate: 0 }
        });
        const data = await res.json();
        return data.success ? data.data : null;
    } catch (error) {
        console.error(`Error fetching catalog section ${id}:`, error);
        return null;
    }
}
