import app from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyABTIyRalfbM_O4eSHyn168bxJsoV6QdEY",
    authDomain: "udemy-project-38129.firebaseapp.com",
    databaseURL: "https://udemy-project-38129.firebaseio.com",
    projectId: "udemy-project-38129",
    storageBucket: "udemy-project-38129.appspot.com",
    messagingSenderId: "763271451680",
    appId: "1:763271451680:web:b8a5799a0fc13b23e85845",
    measurementId: "G-BHX7ENNLDV"
  };
  
class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);
    }

    login(email, password){
        return app.auth().signInWithEmailAndPassword(email, password)
    }

    async register(name, email, password){
        await app.auth().createUserWithEmailAndPassword(email, password)
        
        const uid = app.auth().currentUser.uid

        return app.database().ref('user').child(uid).set({name})
    }

    isInialized(){
        return new Promise(resolve => {
            app.auth().onAuthStateChanged(resolve)
        })
    }

    getCurrent(){
        return app.auth().currentUser && app.auth().currentUser.email
    }
}

export default new Firebase()