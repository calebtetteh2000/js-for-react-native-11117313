# js-for-react-native-11117313
ID:11117313

Task 1
In task 1, the input array [1,2,3,4,5] is passed to the processArray function.
The map function is used to iterate over each number in the array and transform it according to the given requirements.
The resulting array is logged to the console where each even number is squared and each odd number is tripled.

Task 2
With task 2, the formatArrayStrings function takes in two arrays as arguments: stringArray and numberArray.
The function first checks if the lengths of the inputs are the same, throwing an error if they are not.
It then iterates over the arrays and accesses the corresponding string and number at each index.
If the number is even, it capitalizes the string using the toUpperCase method.
If the number is odd, it converts the string to lower case using the toLowerCase method.

Task 3
In task 3 we create user profiles from two arrays: 'arrayNames' which contains original names, and 'arrayModifiedNames', containing modified versions of these names. The function 'createUsersProfiles' checks if both arrays have the same length, if not, it throws an error. If yes, it proceeds to map over arrayNames, creating a user profile object for each entry. Each profile object includes the original name, its corresponding modified name, and an auto-incremented ID.