export const api = async(user,callback) => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    console.log(data);
    callback(data);
}
export const repos = async (user, callback) => {
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const data = await response.json();
    console.log(data);
    let a=[];
    for(let i=0;i<data.length;i++){
        a.push([data[i]['name'], data[i]['html_url'], data[i]['fork'], data[i]['forks'], data[i]['watchers'], data[i]['language']]);
    }
    callback(a);
}