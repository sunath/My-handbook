import {app,auth,User} from "./firebase"
import { getDatabase,ref,db,push,set,onValue } from "firebase/database";
import { NoteDataClass } from "./Notes";


const database = getDatabase()

export const writeUserDataToDatabase = (data) => {
    
    const user_id = User.getCurrentUserID()
    const path = data.whereTo;
    const note_data = data.jsonData;


    const postListRef = ref(database, path+'/'+user_id);
        const newPostRef = push(postListRef);
        set(newPostRef, {
            data:note_data
        });
}


export const get_user_data_on_topic = (type,set_data_function) => {
    const user_id = User.getCurrentUserID()

    const path = type+"/"+user_id;

    const dbRef = ref(database,path);


    onValue(dbRef,set_data_function)
    



}