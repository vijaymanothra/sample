export async function fetchData(url, method, data) {
    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: data ? JSON.stringify(data) : undefined,
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  