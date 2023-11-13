import java.util.*; 
import java.io.*;

class Main {

  public static int DistinctList(int[] arr) {
    // code goes here
    HashSet<Integer> uniqueElements = new HashSet<Integer>();
    int duplicate = 0;

    for (int num : arr) {
      if (uniqueElements.contains(num)) {
        duplicate++;
      } else {
        uniqueElements.add(num);
      }
    }

    return duplicate;
  }

  public static void main (String[] args) {  
    // keep this function call here     
    Scanner s = new Scanner(System.in);
    System.out.print(DistinctList(s.nextLine())); 
  }

}