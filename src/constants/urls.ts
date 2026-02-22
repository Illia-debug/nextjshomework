const baseUrl = 'https://jsonplaceholder.typicode.com';
export const urls = {
    users: {
        allUsers: baseUrl + '/users',
        byId: (id: string) => {
            return baseUrl + '/users/' + id;
        }
    },
    posts: {
        allPosts: baseUrl + '/posts',
        byId: (id: string) => {
            return baseUrl + '/posts/' + id
        }
    },
    comments:{
        allComments:baseUrl+'/comments',
        byId:(id:string)=>{
            return baseUrl+'/comments/'+id
        }
    }

}