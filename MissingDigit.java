import java.util.*; 
import java.io.*;

class Main {

  public static String MissingDigit(String str) {
    // code goes here  
    String[] eqParts = str.split(" ");
    String num1Str = eqParts[0];
    char operator = eqParts[1].charAt(0);
    String num2Str = eqParts[2];
    String resultStr = eqParts[4];

    for (char digit = '0'; digit <= '9'; digit++) {
      int num1 = Integer.parseInt(num1Str.replace('x', digit));
      int num2 = Integer.parseInt(num2Str.replace('x', digit));
      int result = Integer.parseInt(resultStr.replace('x', digit));

      int eqResult = 0;
      if (operator == '+') {
        eqResult = num1 + num2;
      } else if (operator == '-') {
        eqResult = num1 - num2;
      } else if (operator == '*') {
        eqResult = num1 * num2;
      } else if (operator == '/') {
        eqResult = num1 / num2;
      }

      if (eqResult == result) {
        return Character.toString(digit);
      }
    }

    return "x";
  }

  public static void main (String[] args) {  
    // keep this function call here     
    Scanner s = new Scanner(System.in);
    System.out.print(MissingDigit(s.nextLine())); 
  }

}