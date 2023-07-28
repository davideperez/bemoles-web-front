import axios from "axios";

const instagramApi = {
    getPostIds: (userId: string, accessToken: string, nextPageToken?:string) => axios.get(`https://graph.instagram.com/${userId}/media?access_token=${accessToken}${nextPageToken ? `&after=${nextPageToken}` : ''}`),
    getPosts: (accessToken: string, postsLengthLimit: number) => axios.get(`https://graph.instagram.com/me?fields=id,username,media.limit(${postsLengthLimit}){caption,media_type,media_url}&access_token=${accessToken}`),
    getPostsFetch: (accessToken: string, postsLengthLimit: number) => fetch(`https://graph.instagram.com/me?fields=id,username,media.limit(${postsLengthLimit}){caption,media_type,media_url}&access_token=${accessToken}`),
    getPost: (postId: string, accessToken: string) => axios.get(`https://graph.instagram.com/${postId}?access_token=${accessToken}&fields=media_url,media_type,permalink`),
}

export default instagramApi;