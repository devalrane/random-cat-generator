// apis for requests to the backend

const API_BASE_URL = 'http://localhost:8000';

export async function fetchRandomCat() {
    const response = await fetch(`${API_BASE_URL}/randomcat/random_cat/`);
    const data = await response.json();
    return data.cat_url;
}