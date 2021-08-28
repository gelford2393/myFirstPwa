if ('serviceworker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(registration => {
        console.log('SW REGISTERED');
        console.log(registration);
    }).catch(e => {
        console.log('SW Registration Failed')
        console.log(e);
    }) 
}