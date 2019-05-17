const register = params => fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify(params),
})
  .then((response) => {
    if (!response.ok) {
      return Promise.reject(response);
    }
    return response.json();
  })
  .then(json => ({ response: json }))
  .catch(e => ({ error: e }));
export { register };
export default register;
