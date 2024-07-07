import { endpoints } from 'src/utils/axios'

const baseUrl = 'http://localhost:3000'

export const fetchOrderByID = async (id: number) => {

    const response = (await fetch(`${baseUrl}${endpoints.orders}/${id}`, { cache: 'no-store' }))
    return response.json()
}
