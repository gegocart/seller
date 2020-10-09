export default function ({ app, redirect, route }) {
  if (app.$auth.loggedIn) {
  	console.log('welcome loggedIn');
    return redirect({
      name: 'dashboard'
    })
  }
}
