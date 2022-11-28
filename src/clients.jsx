export const getUsers = async () => {
    try {
        const res = await fetch(import.meta.env.VITE_API_URL)
        const data = await res.json()
        return data;
    } catch (error) {
        console.error(error);
    }
};

export async function editUsers(id) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const result = await response.json();
    return result;
}

export async function addUser(values) {
    //intenta hacer la accion del try y en caso de que haya un error en cualquier lugar se ejecuta el catch
    try {
        const resp = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await resp.json();
    } catch (error) {
        console.log(error)
    }
}

export async function updateUser(id, values) {
    try {
        const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
                "Content-Type": 'application/json'
            }
        })
        await resp.json()
    } catch (error) {
        console.log(error)
    }
}

export async function deleteUser(id) {
    try {
        const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE'
        })
        await resp.json()
    } catch (error) {
        console.log(error)
    }
}


// PRODUCTS

export const getProducts = async () => {
    try {
        const res = await fetch("http://localhost:3000/products")
        const data = await res.json()
        return data;
    } catch (error) {
        console.error(error);
    }
};