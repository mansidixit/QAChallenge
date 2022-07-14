# QAChallenge
This is a QAChallenge project where short test automation scripts are implemented


1) The first is the Sort function - It will sort the prices of products from  : Low to High and High to Low
    The way it sorts  : 
               - Get the list of all prices from the selector 
               - replace all the $
               - change the numbers from string to Float and Push it into an Array - Lets call this array A1
               - create one more copy of the array A1 - Lets call this as A2
               - Apply sort function on A1
               - Compare A1 and A2 -> They should be equal
