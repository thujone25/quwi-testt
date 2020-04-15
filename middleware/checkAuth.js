export default function ({app, store, redirect, route}) {
  // If the user is not authenticated
  if (!store.state.AuthStore.authenticated && !route.meta.filter(item => item.guestOnly).length) {
    return redirect('/auth/sign-in');
  } else if (route.meta.filter(item => item.guestOnly).length) {
    return redirect('/');
  }
}
