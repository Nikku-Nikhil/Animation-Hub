class User {
    static all(){
        return fetch('https://reactnative.dev/movies.json')
        .then((res)=> {
            if(res){
               return res.json();
            }
        });

    }
}

export default User;