function cov_16n4gcos0n() {
  var path = "/home/mandi/mandi/firebase-react-app/src/firebase.js";
  var hash = "234a1a7bbeeef875287b6cb35c557b21ebad088d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/mandi/mandi/firebase-react-app/src/firebase.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 12
        },
        end: {
          line: 12,
          column: 2
        }
      },
      "1": {
        start: {
          line: 14,
          column: 20
        },
        end: {
          line: 14,
          column: 30
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "234a1a7bbeeef875287b6cb35c557b21ebad088d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_16n4gcos0n = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_16n4gcos0n();
import firebase from "firebase/app";
import "firebase/auth";
const app = (cov_16n4gcos0n().s[0]++, firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}));
export const auth = (cov_16n4gcos0n().s[1]++, app.auth());
export default app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmViYXNlLmpzIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfRklSRUJBU0VfQVBJX0tFWSIsImF1dGhEb21haW4iLCJSRUFDVF9BUFBfRklSRUJBU0VfQVVUSF9ET01BSU4iLCJkYXRhYmFzZVVSTCIsIlJFQUNUX0FQUF9GSVJFQkFTRV9EQVRBQkFTRV9VUkwiLCJwcm9qZWN0SWQiLCJSRUFDVF9BUFBfRklSRUJBU0VfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJSRUFDVF9BUFBfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIlJFQUNUX0FQUF9GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEIiwiYXBwSWQiLCJSRUFDVF9BUFBfRklSRUJBU0VfQVBQX0lEIiwiYXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU9BLFFBQVAsTUFBcUIsY0FBckI7QUFDQSxPQUFPLGVBQVA7QUFFQSxNQUFNQyxHQUFHLDZCQUFHRCxRQUFRLENBQUNFLGFBQVQsQ0FBdUI7QUFDakNDLEVBQUFBLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLDBCQURhO0FBRWpDQyxFQUFBQSxVQUFVLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyw4QkFGUztBQUdqQ0MsRUFBQUEsV0FBVyxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssK0JBSFE7QUFJakNDLEVBQUFBLFNBQVMsRUFBRVAsT0FBTyxDQUFDQyxHQUFSLENBQVlPLDZCQUpVO0FBS2pDQyxFQUFBQSxhQUFhLEVBQUVULE9BQU8sQ0FBQ0MsR0FBUixDQUFZUyxpQ0FMTTtBQU1qQ0MsRUFBQUEsaUJBQWlCLEVBQUVYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVyxzQ0FORTtBQU9qQ0MsRUFBQUEsS0FBSyxFQUFFYixPQUFPLENBQUNDLEdBQVIsQ0FBWWE7QUFQYyxDQUF2QixDQUFILENBQVQ7QUFVQSxPQUFPLE1BQU1DLElBQUksNkJBQUdsQixHQUFHLENBQUNrQixJQUFKLEVBQUgsQ0FBVjtBQUNQLGVBQWVsQixHQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcblxuY29uc3QgYXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX0FQSV9LRVksXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GSVJFQkFTRV9BVVRIX0RPTUFJTixcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxuICBhcHBJZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX0FQUF9JRCxcbn0pO1xuXG5leHBvcnQgY29uc3QgYXV0aCA9IGFwcC5hdXRoKCk7XG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iXX0=