import { useQuery } from "react-query";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const UseData = () => {
    return useQuery<any[], Error>("latestData", async () => {
        const col = collection(db, "messi");
        const querySnapshot = await getDocs(col);
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    });
};

export default UseData;
