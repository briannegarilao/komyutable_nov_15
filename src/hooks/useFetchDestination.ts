import firestore from "@react-native-firebase/firestore";

const fetchDocumentData = async () => {
  try {
    const documentSnapshot = await firestore()
      .collection("destinationPoints")
      .doc("nortEDSAPoint")
      .get();

    if (documentSnapshot.exists) {
      const data = documentSnapshot.data();
      console.log("Document data:", data);
      return data;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document data:", error);
    return null;
  }
};

export default fetchDocumentData;
