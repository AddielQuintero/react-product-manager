import { TUser } from '@/types'
import axios from 'axios'
import { CONFIG } from '@config'

class UserService {
  async getUser(userName: string): Promise<TUser> {
    try {
      const { data } = await axios.get<TUser[]>(`${CONFIG.API_BASE}/users?userName=${userName}`)
      return data[0]
    } catch (error) {
      console.error(`UserError: ${error}`)
      throw new Error('Error fetching user data')
    }
  }

  //   async createUser(user: TUser): Promise<TUser> {
  //     const response = await axios.post<TUser>(`${BASE_URL}/users`, user)
  //     return response.data
  //   }

  //   async updateUser(user: TUser): Promise<TUser> {
  //     const response = await axios.put<TUser>(`${BASE_URL}/users/${user.id}`, user)
  //     return response.data
  //   }

  //   async deleteUser(userId: string): Promise<void> {
  //     await axios.delete(`${BASE_URL}/users/${userId}`)
  //   }
}

export default new UserService()
