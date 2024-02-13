export const basicFetch = async<returnType>(endpoint: string): Promise<returnType> => {
    const response = await fetch(endpoint, {
        cache: "no-store",
    });

    if(!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();

    return data;
}