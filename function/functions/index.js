const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.formCompletion = functions.https.onRequest((request, response) => {
    
    exports.formCompletion1 = functions.firestore
        .document('form/{formId}')
        .onUpdate((change, context) => {
        // functions.logger.log("Hello Sime");
        // Get an object representing the document
        // e.g. {'name': 'Marie', 'age': 66}
        let { percentageId, ...userData} = change.after.data();
        // Retrieve the current count of name changes
        let percentageValue = 0;
        // access a particular field as you would any JS property
        for (const key in userData) {
            if (userData.hasOwnProperty(key) && userData[key].length > 0) {
                percentageValue = percentageValue + 20
            }
        };
        // Then return a promise of a set operation to update the count
        return admin.firestore().collection('form-percentage').doc(percentageId).set({
            percentage: percentageValue
        }, {merge: true});
    });

