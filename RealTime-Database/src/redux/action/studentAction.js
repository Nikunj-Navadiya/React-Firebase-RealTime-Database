import { getDatabase, onValue, ref, set } from "firebase/database"
import { app } from "../../firebaseConfig"

const db = getDatabase(app)


export const studentAdd = (student) => {
    return async (dispatch) => {
        try {
            set(ref(db, "student/" + student.grid), {
                name: student.name,
                company: student.company,
                email: student.email,
                phone: student.phone,
                message: student.message
            })
            dispatch({
                type: "addstudent",
                payload: student
            })
        }
        catch (err) {
            dispatch({
                type: 'addstudenterr',
                payload: err
            })
        }
    }
}

const fetchUser = (data) => {
    console.log(data);
    return async (dispatch) => {
        try {
            dispatch({
                type: 'viewstudent',
                payload: data
            })
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}


export const viewStudent = () => {
    return async (dispatch) => {
        try {
            const users = ref(db, "student");
            onValue(users, (u) => {
                const data = u.val();
                dispatch(fetchUser(data))
            })
        } catch (err) {
            dispatch({
                type: 'viewstudenterr',
                payload: err
            })
        }
    }
}
