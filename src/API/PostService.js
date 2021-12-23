import axios from "axios";

export default class PostService{
  static async getPosts(limit, page) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
          params: {
            _limit: limit,
            _page: page
          }
        })
        return response;
  }  
  static async getIdPost(id) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    return response;
  }
  static async getComPost(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return response;
  }
}


  
