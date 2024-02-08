import { useQuery } from "react-query";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { FirebaseData } from "@/types";

const UseData = () => {
    return useQuery<FirebaseData[], Error>("latestData", async () => {
        const col = collection(db, "messi");
        const querySnapshot = await getDocs(col);
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as FirebaseData[];
    });
};

export default UseData;
