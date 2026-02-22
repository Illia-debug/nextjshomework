const baseUrl = 'https://jsonplaceholder.typicode.com';
export const urls = {
    users: {
        allUsers: baseUrl + '/users',
        byId: (id: string) => {
            return baseUrl + '/users/' + id;
        }
    },
    posts: {
        allPosts:baseUrl+'/posts'
    },
    comments:{
        allComments:baseUrl+'/comments'
    }
}