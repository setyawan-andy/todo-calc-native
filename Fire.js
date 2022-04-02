import firebase from "firebase";
import "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD3oizpB1yWu1PgoFjrJax6Z2eqOOLx-6s",
    authDomain: "todoways-17.firebaseapp.com",
    projectId: "todoways-17",
    storageBucket: "todoways-17.appspot.com",
    messagingSenderId: "571027244358",
    appId: "1:571027244358:web:405a49ad31728524235147",
}
class Fire {

    constructor(callback){
        this.init(callback)
    }

    init(callback){
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
        }

        firebase.auth().onAuthStateChanged(user => {
            if(user){
                callback(null, user)
            } else {
                firebase.auth().signInAnonymously().catch(error => {
                    callback(error)
                });
            }
        });
    }

    getLists(callback) {
        let ref = this.ref.orderBy('name');

        this.unsubscribe = ref.onSnapshot(snapshot => {
            lists = [];

            snapshot.forEach(doc => {
                lists.push({ id: doc.id, ...doc.data() });
            });
            
            callback(lists);
        });
    }

    addList(list) {
        let ref = this.ref;

        ref.add(list);
    }

    updateList(list) {
        let ref = this.ref;
        
        ref.doc(list.id).update(list);
    }

    deleteList(list){
        let ref = this.ref;
        ref.doc(list.id).delete()
    };

    get userId() {
        return firebase.auth().currentUser.uid
    }

    get ref() {
        return firebase.firestore().collection('users').doc(this.userId).collection("lists");
    }

    detach() {
        this.unsubscribe();
    }
}

export default Fire;
